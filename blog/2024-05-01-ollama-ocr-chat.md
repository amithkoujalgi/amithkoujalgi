---
slug: ollama-ocr-chat
title: Ollama OCR Chat
authors: [ amith ]
tags: [ AI, Ollama, LLM, GenAI, OCR ]
---

import OllamaChatOCRUI1 from '@site/static/img/ollama-chat-ocr-ui.png';

<img src={OllamaChatOCRUI1} style={{width: '100%'}} />

This article helps you build a simple chat app using images having text.
This uses Ollama to interact with models.

With this user interface you can:

- set the Ollama host to you want to use
- select models available on Ollama
- upload image having text information
- ask questions to the selected model
- get streaming answers from the model

### Install dependencies

```shell
pip install streamlit==1.31.0 ollama==0.1.6 easyocr
```

### Streamlit app code

```python
# pip install streamlit==1.31.0 ollama==0.1.6 easyocr
from typing import Generator

import easyocr
import ollama
import streamlit as st
from ollama import Client

title = 'Chat with images having text'

st.set_page_config(layout="wide", page_title=title)

st.title(title)


def extract_with_ocr(image_file):
    def _convert_to_xywh(coords):
        x_coords = [coord[0] for coord in coords]
        y_coords = [coord[1] for coord in coords]

        x_min = min(x_coords)
        y_min = min(y_coords)
        x_max = max(x_coords)
        y_max = max(y_coords)

        x = x_min
        y = y_min
        w = x_max - x_min
        h = y_max - y_min

        return {
            "x": float(x),
            "y": float(y),
            "w": float(w),
            "h": float(h),
        }

    data = []
    reader = easyocr.Reader(['en'])
    result = reader.readtext(image_file)
    for item in result:
        coordinates, text, score = item
        data.append({
            "text": text,
            "coordinates": _convert_to_xywh(coordinates),
            "confidence-score": score
        })
    return data


def ask_ollama(ollama_url: str, model_name: str, ocr_data: dict, messages: list) -> Generator:
    ocr_text = ""

    for data in ocr_data:
        ocr_text = ocr_text + "\n" + data['text']

    question = messages[-1]['content']
    _prompt = f"""
    Use this data and answer the user's questions appropriately and very precisely. Keep the answer to the point. 
    If you don't know the answer, promptly tell that you do not know the answer.   
    
    {ocr_text}
    
    {question}
    """
    # print(_prompt)
    messages[-1]['content'] = _prompt

    stream = Client(host=ollama_url).chat(
        model=model_name,
        messages=messages,
        stream=True
    )
    for chunk in stream:
        yield chunk['message']['content']


if "ollama_host" not in st.session_state:
    st.session_state.ollama_host = ""
if "selected_model" not in st.session_state:
    st.session_state.selected_model = ""
if "uploaded_image" not in st.session_state:
    st.session_state.uploaded_image = ""
if "ocr_data" not in st.session_state:
    st.session_state.ocr_data = {}
if "messages" not in st.session_state:
    st.session_state.messages = []
with st.sidebar:
    st.session_state.ollama_host = st.text_input("Ollama Host:", "http://localhost:11434")
    st.session_state.selected_model = st.selectbox(
        "Select the model:", [model["name"] for model in ollama.list()["models"]])
    st.session_state.uploaded_image = st.file_uploader(
        "Choose a file", accept_multiple_files=False,
        type=["png", "jpg", "jpeg"]
    )

if st.session_state.uploaded_image is not None:
    st.session_state.messages = []
    img_bytes_data = st.session_state.uploaded_image.getvalue()
    st.session_state.ocr_data = extract_with_ocr(img_bytes_data)
    st.image(img_bytes_data)
    st.session_state.messages.append(
        {
            "role": "assistant",
            "content": f"Uploaded file: `{st.session_state.uploaded_image.name}`. Now what would you like to know from this image?"
        }
    )
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])
if prompt := st.chat_input("How can I help you?"):
    st.session_state.messages.append({"role": "user", "content": prompt})
    with st.chat_message("user"):
        st.markdown(prompt)
    with st.chat_message("assistant"):
        response = st.write_stream(
            ask_ollama(
                st.session_state.ollama_host,
                st.session_state.selected_model,
                st.session_state.ocr_data,
                st.session_state.messages
            )
        )
    st.session_state.messages.append(
        {"role": "assistant", "content": response}
    )

```

### Start the app

```shell
streamlit run <your-file-name>.py
```