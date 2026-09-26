import streamlit as st

from PIL import Image
import numpy as np

from streamlit_image_gallery import streamlit_image_gallery as gallery


#### MAIN       
st.set_page_config(page_title = "Test gallery", layout = "wide")

images = [

    {
        "id": "example_1",
        "title": "Fine structures",
        "description": "Small bacterial structures",
        "image": (
            "https://images.unsplash.com/"
            "photo-1535378917042-10a22c95931a"
            "?auto=format&fit=crop&w=800&q=80"
        ),
    },

    {
        "id": "example_2",
        "title": "Dense biofilm",
        "description": "Dense bacterial structures",
        "image": (
            "https://images.unsplash.com/"
            "photo-1532187863486-abf9dbad1b69"
            "?auto=format&fit=crop&w=800&q=80"
        ),
    },

    {
        "id": "example_3",
        "title": "Large aggregates",
        "description": "Large bacterial aggregates",
        "image": (
            "https://images.unsplash.com/"
            "photo-1559757175-0eb30cd8c063"
            "?auto=format&fit=crop&w=800&q=80"
        ),
    },

]


result = gallery(images, key = "examples",)

st.write(f"Component state: {result}")