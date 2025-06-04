"use client"

import 'pure-react-carousel/dist/react-carousel.es.css';
import { SliderTrilhas } from "./trilhasConhecimento/SliderTrilhas";

export default function SliderTrilhaConhecimentoExtended() {
  return (
    <div className="invisible w-0 h-0 p-0 lg:h-full lg:visible lg:w-screen lg:mt-1">
      <div className="w-0 lg:w-full relative h-full">
        <div className="flex justify-between items-end overflow-clip py-0 lg:w-full">
          <SliderTrilhas />
        </div>
      </div>
    </div>
  )
}