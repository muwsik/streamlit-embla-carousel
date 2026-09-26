import { StrictMode } from 'react'
import { createRoot, Root } from 'react-dom/client'
import {
  FrontendRenderer,
  FrontendRendererArgs
} from '@streamlit/component-v2-lib'

import EmblaCarousel from './EmblaCarousel'
import type { GalleryData, GalleryState } from './types'

import './embla.css'

const reactRoots: WeakMap<FrontendRendererArgs['parentElement'], Root> = new WeakMap()

const MyComponentRoot: FrontendRenderer<GalleryState, GalleryData> = (args) => {
  const { data, parentElement, setStateValue } = args

  const rootElement = parentElement.querySelector('.react-root')

  if (!rootElement) {
    throw new Error('Unexpected: React root element not found')
  }

  let reactRoot = reactRoots.get(parentElement)

  if (!reactRoot) {
    reactRoot = createRoot(rootElement)
    reactRoots.set(parentElement, reactRoot)
  }

  reactRoot.render(
    <StrictMode>
      <div className="theme-light">
        <EmblaCarousel
          images={data.images}
          onSelect={(id) => setStateValue('selected_id', id)}
        />
      </div>
    </StrictMode>
  )

  return () => {
    const reactRoot = reactRoots.get(parentElement)

    if (reactRoot) {
      reactRoot.unmount()
      reactRoots.delete(parentElement)
    }
  }
}

export default MyComponentRoot