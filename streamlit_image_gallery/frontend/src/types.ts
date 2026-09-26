import type { FrontendState } from "@streamlit/component-v2-lib";
import type { CSSProperties } from "react";

// Data types

export interface GalleryState extends FrontendState {
    selected_id: string | null;
}


export interface GalleryImage {
    id: string;
    title: string;
    image: string;
    description?: string;
}


export interface GalleryData {
    images: GalleryImage[];
}
