import type { FrontendState } from '@streamlit/component-v2-lib'

export interface GalleryState extends FrontendState {
  selected_id: string | null
}

export interface GalleryImage {
  id: string
  title: string
  image: string
  description?: string
}

export interface GalleryData {
  images: GalleryImage[]
}

export type Image = {
  id: string
  title: string
  image: string
  description?: string
}