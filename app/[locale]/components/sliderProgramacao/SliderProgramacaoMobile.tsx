import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import useAppContext from '../../context/appContext';
import { SlideProgramacao } from './SlideProgramacao';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useState } from 'react';

export function SliderProgramacaoMobile() {
  const [totalSlides, setTotalSlides] = useState(5)
  const { activeSlideMobile, setActiveSlideMobile } = useAppContext()

  const clickNext = () => {
    activeSlideMobile < totalSlides - 1 ? setActiveSlideMobile(activeSlideMobile + 1) : setActiveSlideMobile(0)
  }

  const clickPrevious = () => {
    activeSlideMobile > 0 ? setActiveSlideMobile(activeSlideMobile - 1) : setActiveSlideMobile(0)
  }

  return (
    <div className="mt-[-3rem] mb-0 flex justify-between h-auto m-0 p-0 md:h-[450px] lg:mb-0 xl:w-[23.5rem] xl:h-[700px] 2xl:h-[300px] 2xl:mb-0 3xl:h-[800px]">
      <div className="h-[300px] ">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={40}
          totalSlides={totalSlides}
        >
          <Slider className="w-screen h-screen">
            {Array.from({length: totalSlides}).map((_, index) => (
              <Slide key={index} index={index} onTouchStart={() => setActiveSlideMobile(index)}>
                <SlideProgramacao index={index} />
              </Slide>
            ))}
          </Slider>

          <div className="w-screen h-0 absolute top-28 flex justify-between z-10 1sm:top-16 md:top-36 md:pe-6 md:ps-6 lg:w-[96%] lg:top-[18rem] xl:w-[106%] 2xl:w-[104%] 2xl:top-[25rem]">
            <ButtonBack>
              <div className="w-14 h-14 p-2 mx-0 rounded-full flex justify-center items-center opacity-85 hover:cursor-pointer lg:hover:bg-yellow-500 bg-yellow-400">
                <FaAngleLeft
                  size={25}
                  className="pr-1 text-white"
                  onClick={() => clickPrevious()}
                />
              </div>
            </ButtonBack>

            <ButtonNext>
              <div className="w-14 h-14 p-2 mx-0 rounded-full flex justify-center items-center opacity-85 hover:cursor-pointer lg:hover:bg-yellow-500 bg-yellow-400">
                <FaAngleRight
                  size={20}
                  className="pl-1 text-white"
                  onClick={() => clickNext()}
                />
              </div>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div >
  )
}