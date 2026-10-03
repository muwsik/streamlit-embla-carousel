import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'
import { DotButton, useDotButton } from './EmblaCarouselDotButton'

import type { Image } from './types'


type PropType = {
  images: Image[]
  options?: EmblaOptionsType
  onSelect?: (id: string) => void
}

const EmblaCarousel = (props: PropType) => {
  const { images, options, onSelect } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((item) => (
            <div className="embla__slide" key={item.id}>
              <div
                className= "embla__slide__image"
                onClick={() => {
                  setSelectedId(item.id)
                  onSelect?.(item.id)
                }}
              >                
                <img src={item.image} alt={item.title} />                 

                <div className="embla__slide__title">
                  {item.title}
                </div>

                {item.description && (
                  <div
                    className="embla__slide__description"
                    onClick={(event) => event.stopPropagation()}
                  >
                    <ReactMarkdown>{item.description}</ReactMarkdown>
                  </div>
                )}

                {selectedId === item.id && (
                  <div className="embla__slide__selected-indicator">
                    ✓
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(
                index === selectedIndex ? ' embla__dot--selected' : ''
              )}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel