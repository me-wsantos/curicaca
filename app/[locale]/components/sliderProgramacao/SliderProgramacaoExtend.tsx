"use client"

import 'pure-react-carousel/dist/react-carousel.es.css';
import { SliderProgramacao } from "./SliderProgramacao";

export function SliderProgramacaoExtend() {
  return (
    <div className="invisible w-0 h-0 p-0 lg:h-[350px] lg:visible lg:w-screen lg:mt-0 lg:top-[-50px]">
      <div className="w-0 lg:w-auto relative h-full">
          <SliderProgramacao />
      </div>
    </div>
  )
}