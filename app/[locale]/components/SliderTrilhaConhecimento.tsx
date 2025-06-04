"use client"

import 'pure-react-carousel/dist/react-carousel.es.css';
import { SliderTrilhasMobile } from "./trilhasConhecimento/SliderTrilhasMobile";

export default function SliderTrilhaConhecimentoExtended() {
  return (
    <div className="visible w-screen h-full p-0 md:h-auto lg:invisible lg:w-0 lg:h-0 lg:mt-1">
      <div className="w-0 lg:w-full relative h-full">
        <div className="flex w-screen justify-between items-end overflow-clip py-0 md:h-full">
          <SliderTrilhasMobile />
        </div>
      </div>
    </div>
  )
}