"use client"

import 'pure-react-carousel/dist/react-carousel.es.css';
import { SliderProgramacaoMobile } from './SliderProgramacaoMobile';

export default function ProgramacaoSlider() {
  return (
    <div className="visible w-screen h-auto p-0 mt-0 1sm:h-[150px] md:h-[350px] md:mt-12 lg:invisible lg:w-0 lg:h-0 lg:mt-1">
      
      <div className="w-0 mt-10 lg:w-full relative h-full 1sm:mt-[-2rem]">
        <div className="flex w-screen justify-between items-end overflow-clip py-0 md:h-full">
          <SliderProgramacaoMobile />
        </div>
      </div>
    </div>
  )
}