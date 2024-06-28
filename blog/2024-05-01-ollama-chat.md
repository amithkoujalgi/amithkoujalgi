---
slug: ollama-chat
title: Ollama Chat Interface with Streamlit
authors: [ amith ]
tags: [ AI, Ollama, LLM, GenAI ]
---

import OllamaChatUI1 from '@site/static/img/ollama-chat-ui.png';

<img src={OllamaChatUI1} style={{width: '100%'}} />

This article helps you build a simple user interface for Ollama server.

With this user interface you can:

- set the Ollama host to you want to use
- select models available on Ollama
- ask questions to the selected model
- get streaming answers from the model

### Install dependencies

```shell
pip install streamlit==1.31.0 ollama==0.1.6
```

### Streamlit app code

```python

from typing import Generator

import ollama
import streamlit as st
from ollama import Client

st.set_page_config(layout="wide", page_title="Ollama Chat")


def ask_ollama(ollama_url: str, model_name: str, messages: list) -> Generator:
    stream = Client(host=ollama_url).chat(
        model=model_name,
        messages=messages,
        stream=True
    )
    for chunk in stream:
        yield chunk['message']['content']


st.title("Ollama Chat")
if "ollama_host" not in st.session_state:
    st.session_state.ollama_host = ""
if "selected_model" not in st.session_state:
    st.session_state.selected_model = ""
if "messages" not in st.session_state:
    st.session_state.messages = []
st.session_state.ollama_host = st.text_input("Ollama Host:", "http://localhost:11434")
st.session_state.selected_model = st.selectbox(
    "Select the model:", [model["name"] for model in ollama.list()["models"]])
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