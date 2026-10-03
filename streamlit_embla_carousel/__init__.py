import base64
import io

import numpy as np
import streamlit as st
from PIL import Image


def validate_image(image):
    if isinstance(image, Image.Image):
        return image

    if isinstance(image, np.ndarray):
        if image.dtype != np.uint8:
            image = image.astype(np.uint8)
        return Image.fromarray(image)

    if isinstance(image, str):
        if image.startswith("data:image/"):
            return image

        if image.startswith(("http://", "https://")):
            return image

    raise TypeError(f"Unsupported image type: {type(image)}")


#### MAIN

import streamlit as st

_component = st.components.v2.component(
    "streamlit-embla-carousel.streamlit_embla_carousel",
    js = "index-*.js",
    css = "index-*.css",
    html = '<div class="react-root"></div>',
)


def streamlit_embla_carousel(images, key = "carousel"):
    processed_images = []
    for item in images:
        image = validate_image(item["image"])
        if isinstance(image, Image.Image):
            buffer = io.BytesIO()
            image.save(buffer, format="PNG")
            image = (
                "data:image/png;base64,"
                + base64.b64encode(buffer.getvalue()).decode("utf-8")
            )

        processed_images.append({
            **item,
            "image": image,
        })

    return _component(
        key = key,
        data = {"images": processed_images},
        default = None,
    )
