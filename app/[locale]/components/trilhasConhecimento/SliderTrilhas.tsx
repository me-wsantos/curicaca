import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { SectionTrilha1Extended } from './SectionTrilha1Extended'
import { SectionTrilha2Extended } from './SectionTrilha2Extended'

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export function SliderTrilhas() {
  return (
    <div className="w-full mt-0 mb-12 flex justify-between h-[500px] shadow-xl m-0 p-0 lg:mb-0 xl:w-[23.5rem] xl:h-[700px] 2xl:h-[800px] 2xl:mb-0">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={2}
      >
        <Slider className="w-screen">
          <Slide index={0} className="">
            <SectionTrilha1Extended />
          </Slide>
          <Slide index={1} className="">
            <div className="">
              <SectionTrilha2Extended />
            </div>
          </Slide>
        </Slider>

        <div className="w-[108%] absolute flex justify-between right-0 z-0 left-[-2.6rem] lg:w-[96%] lg:top-[18rem] xl:w-[106%] 2xl:w-[105%] 2xl:top-[25rem]">
          <ButtonBack>
            <div className="w-20 h-20 p-2 mx-0 bg-red-700 rounded-full flex justify-center items-center opacity-85 hover:cursor-pointer hover:bg-red-900">
              <FaAngleLeft
                size={30}
                className="pr-1 text-white"
              />
            </div>
          </ButtonBack>

          <ButtonNext>
            <div className="w-20 h-20 p-2 mx-0 bg-red-700 rounded-full flex justify-center items-center opacity-85 hover:cursor-pointer hover:bg-red-900">
              <FaAngleRight
                size={30}
                className="pl-1 text-white"
              />
            </div>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  )
}