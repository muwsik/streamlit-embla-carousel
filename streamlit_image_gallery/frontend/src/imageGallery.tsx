import { FC } from "react";
import useEmblaCarousel from "embla-carousel-react";

import type {
    FrontendState,
    FrontendRendererArgs,
} from "@streamlit/component-v2-lib";

import type {
    GalleryData,
    GalleryState,
} from "./types";


export type ImageGalleryProps =
    Pick<
        FrontendRendererArgs<GalleryState, GalleryData>,
        "setStateValue"
    > & GalleryData;


const ImageGallery: FC<ImageGalleryProps> = ({
    images,
    setStateValue,
}) => {

    const [emblaRef] = useEmblaCarousel({
        align: "start",
        loop: false,
    });


    const handleClick = (id: string) => {
        setStateValue("selected_id", id);
    };


    return (
        <div className="gallery">
            <div
                className="embla"
                ref={emblaRef}
            >
                <div className="embla__container">
                    {images.map((item) => (
                        <div
                            className="embla__slide"
                            key={item.id}
                        >
                            <div
                                className="gallery-card"
                                onClick={() => handleClick(item.id)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                />

                                <div className="gallery-overlay">
                                    <h3>
                                        {item.title}
                                    </h3>
                                    {item.description && (
                                        <p>
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
    
};


export default ImageGallery;