import base64
import io

import numpy as np
import streamlit as st
from PIL import Image


def validate_image(_image):
    if isinstance(_image, Image.Image):
        pass
    elif isinstance(_image, np.ndarray):
        if _image.dtype != np.uint8:
            _image = _image.astype(np.uint8)
        _image = Image.fromarray(_image)
    else:
        raise TypeError(f"Unsupported image type: {type(_image)}")

    return _image


#### MAIN

_component = st.components.v2.component(
    "streamlit-image-gallery.streamlit_image_gallery",
    js = "index-*.js",
    html = '<div class="react-root"></div>',
)

def streamlit_image_gallery(
    data,
    help = None,
    key = "gallery",
):       

    return _component(
        key = key,
        data = {
            "help": help
        },
        default = None
    )
