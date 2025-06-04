import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { SectionProgramacao1Extended } from './/SectionProgramacao1Extended'
import { SectionProgramacao2Extended } from './SectionProgramacao2Extended'

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { SectionProgramacao3Extended } from './SectionProgramacao3Extended';
import { SectionProgramacao4Extended } from './SectionProgramacao4Extended';

export function SliderProgramacao() {
  return (
    <div className="w-full mt-0 mb-12 flex justify-center h-[500px] m-0 p-0 lg:mb-0 lg:w-[1100px] xl:w-[1200px] lg:h-[200px] xl:h-[200px] 2xl:w-[1500px] 2xl:h-[400px] 2xl:mb-12 3xl:w-[1500px]">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={4}
      >
        <Slider className="w-screen">
          <Slide index={0}>
            <SectionProgramacao1Extended />
          </Slide>
          <Slide index={1}>
            <div>
              <SectionProgramacao2Extended />
            </div>
          </Slide>
          <Slide index={2}>
            <div>
              <SectionProgramacao3Extended />
            </div>
          </Slide>
          <Slide index={3}>
            <div>
              <SectionProgramacao4Extended />
            </div>
          </Slide>
        </Slider>

        <div id="buttons" className="w-[108%] h-0 absolute flex justify-between right-0 left-[-2.6rem] lg:w-[105%] lg:top-[2rem] xl:w-[100%] 2xl:top-[10rem] 2xl:w-[111%] 2xl:left-[-6rem]">
          <ButtonBack>
            <div className="w-20 h-20 p-2 mx-0 bg-yellow-400 rounded-full flex justify-center items-center opacity-85 hover:cursor-pointer hover:bg-yellow-500">
              <FaAngleLeft
                size={30}
                className="pr-1 text-white"
              />
            </div>
          </ButtonBack>

          <ButtonNext>
            <div className="w-20 h-20 p-2 mx-0 bg-yellow-400 rounded-full flex justify-center items-center opacity-85 hover:cursor-pointer hover:bg-yellow-500">
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