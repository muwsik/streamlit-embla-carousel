import streamlit as st

from streamlit_embla_carousel import streamlit_embla_carousel as carousel


#### MAIN       
st.set_page_config(page_title = "Test carousel", layout = "wide")

images = [
    {
        "id": "example_1",
        "title": ("**Example 1**. "
            "[source](https://picsum.photos/id/10/800/600)"),
        "image": "https://picsum.photos/id/10/800/600",
        "description": "**Описание примера**"
    },
    {
        "id": "example_2",
        "title": "Example 2",
        "image": "https://picsum.photos/id/20/800/600",
        "description": "Magnification: **100k**"
    },
    {
        "id": "example_3",
        "title": "Example 3",
        "image": "https://picsum.photos/id/30/800/600",
        "description": "[Open dataset](https://example.com)"
    },
    {
        "id": "example_4",
        "title": "Example 4",
        "image": "https://picsum.photos/id/40/800/600",
        "description": "Описание примера"
    },
    {
        "id": "example_5",
        "title": "Example 5",
        "image": "https://picsum.photos/id/50/800/600",
        "description": "Описание примера"
    },
    {
        "id": "example_6",
        "title": "Example 6",
        "image": "https://picsum.photos/id/60/800/600",
        "description": "Описание примера"
    },
    {
        "id": "example_7",
        "title": "Example 7",
        "image": "https://picsum.photos/id/70/800/600",
        "description": "Описание примера"
    },
    {
        "id": "example_8",
        "title": "Example 8",
        "image": "https://picsum.photos/id/80/800/600",
        "description": "Описание примера"
    },
    {
        "id": "example_9",
        "title": "Example 9",
        "image": "https://picsum.photos/id/90/800/600",
        "description": "Описание примера"
    },
    {
        "id": "example_10",
        "title": "Example 10",
        "image": "https://picsum.photos/id/100/800/600",
        "description": "Описание примера"
    },
]


result = carousel(images, key = "examples",)

st.write(f"Component state: {result}")