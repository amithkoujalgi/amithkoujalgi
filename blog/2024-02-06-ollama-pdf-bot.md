---
slug: ollama-pdf-bot
title: Ollama PDF Bot
authors: [ amith ]
tags: [ AI, Ollama, LLM, GenAI ]
---

Hello LLM enthusiasts!

I wanted to share the details about a project that I put together while exploring LLMs and trying out some ideas.

What is it?​

Imagine an experience where you can engage with your text documents 📄 in a conversational 💬 manner! This is exactly what
it is. A PDF Bot 🤖. It is a chatbot that accepts PDF documents and lets you have conversation over it.

How is this helpful?​

• Talk to your documents: Interact with your PDFs and extract the information in a way that you’d like 📄✨. This could
prove helpful in summarising the PDF, or to fetch specific details from a long document or to list/format data in a
structure you’d like and much more!
• Choose your LLM: Switch to a different model that works for your needs. You control the system according to your
requirements.
• Local Setup: The LLMs and the chat app is setup locally. Your data does not leave your computer!

How does it work?​

The system consists of an app, LLM and a question-answering module. The app is the interface for the user — where the
user can upload PDF document and then ask questions. (built with StreamLit). The app connects to a module (built with
LangChain) that loads the PDF, extracts text, splits it into smaller chunks, generates embeddings from the text using
LLM served via Ollama (a tool to manage and run LLMs locally) and creates a vectorstore for information retrieval. It
then sets up a question-answering system that enables user to have a conversation with the system.

🚀 Try it out now: https://github.com/amithkoujalgi/ollama-pdf-bot

Feel free to explore and share your thoughts! 💡

#DocumentInteraction #ConversationalAI #LLM #PDFBot #AI #GenAI #GenerativeAI #Ollama #OpenSource #LangChain #StreamLit
#ChatBot