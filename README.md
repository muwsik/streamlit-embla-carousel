# streamlit-embla-carousel

A lightweight image carousel component for [Streamlit](https://streamlit.io/) based on [Embla Carousel](https://www.embla-carousel.com/).

The component allows you to display images in a horizontal carousel with titles, descriptions, navigation controls, and image selection.

## Features

* Horizontal image carousel
* Multiple images visible at once
* Previous/next navigation
* Navigation dots
* Image selection with a visual indicator
* Titles and descriptions for images
* Markdown support in descriptions
* Responsive layout
* Built with Streamlit Components v2 and Embla Carousel

## Installation

```bash
pip install streamlit-embla-carousel
```

## Image format

Each image is defined by an object containing:

| Field         | Type  | Description                   |
| ------------- | ----- | ----------------------------- |
| `id`          | `str` | Unique image identifier       |
| `title`       | `str` | Image title                   |
| `image`       | `str` | Image source                  |
| `description` | `str` | Optional Markdown description |


## License

Permission is granted to use this software for personal,
educational and research purposes.

Commercial use, redistribution, modification, or creation
of derivative works is prohibited without prior written
permission from the copyright holder.

For commercial licensing: [muwsik@mail.ru](mailto:muwsik@mail.ru)