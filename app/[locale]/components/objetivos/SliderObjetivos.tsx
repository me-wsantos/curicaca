"use client"

import { useEffect, useState } from "react"
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel'
import { objetivos } from "../../data/objetivos"
import { CardObjetivo } from "./CardObjetivo"
import { useTranslations } from 'next-intl'

export default function SliderObjetivos() {
  const [activeCard, setActiveCard] = useState(0)
  const translate = useTranslations("Section05")

  const clickNext = () => {
    activeCard === objetivos.length - 1 ? setActiveCard(0) : setActiveCard(activeCard + 1)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext()
    }, 4500)
    return () => {
      clearTimeout(timer)
    }
  }, [activeCard])

  return (
    <div className="w-full mt-0 mb-0 flex flex-col h-[300px] m-0 p-0 lg:mb-0 xl:w-[23.5rem] xl:h-[700px] 2xl:h-[800px] 2xl:mb-0">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={100}
        totalSlides={6}
        isPlaying
      >
        <Slider className="w-full">
          <Slide index={0} className="">
            <div className="flex justify-center gap-6">
              <CardObjetivo index={objetivos[0].id} icon={objetivos[0].icon} description={translate('objetivo1')} />
            </div>
          </Slide>
          <Slide index={1} className="">
            <div className="flex justify-center gap-6">
              <CardObjetivo index={objetivos[1].id} icon={objetivos[1].icon} description={translate('objetivo2')} />
            </div>
          </Slide>
          <Slide index={2} className="">
            <div className="flex justify-center gap-6">
              <CardObjetivo index={objetivos[2].id} icon={objetivos[2].icon} description={translate('objetivo3')} />
            </div>
          </Slide>
          <Slide index={3} className="">
            <div className="flex justify-center gap-6">
              <CardObjetivo index={objetivos[3].id} icon={objetivos[3].icon} description={translate('objetivo4')} />
            </div>
          </Slide>
          <Slide index={4} className="">
            <div className="flex justify-center gap-6">
              <CardObjetivo index={objetivos[4].id} icon={objetivos[4].icon} description={translate('objetivo5')} />
            </div>
          </Slide>
          <Slide index={5} className="">
            <div className="flex justify-center gap-6">
              <CardObjetivo index={objetivos[5].id} icon={objetivos[5].icon} description={translate('objetivo6')} />
            </div>
          </Slide>
        </Slider>
      </CarouselProvider>
    </div>
  )
}