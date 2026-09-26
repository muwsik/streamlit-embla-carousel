import { FC, useRef, useState, useEffect, useLayoutEffect } from "react"
import type { FrontendRendererArgs } from "@streamlit/component-v2-lib"
import ReactMarkdown from "react-markdown";

import { 
    type OverlayData, type OverlayState,
    ///
 } from "./types"



export type ImageOverlayProps =
    Pick<
        FrontendRendererArgs<OverlayState, OverlayData>,
        "setStateValue" | "setTriggerValue"
    > & OverlayData



//// Main
const ImageOverlay: FC<ImageOverlayProps> = (props) => {
    const {
        help,
    } = props

   
}

export default ImageOverlay
