import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import useAppContext from '../../context/appContext';
import { SectionTrilha1 } from './SectionTrilha1'
import { SectionTrilha2 } from './SectionTrilha2'
import { SectionTrilha3 } from './SectionTrilha3'
import { SectionTrilha4 } from './SectionTrilha4'
import { SectionTrilha5 } from './SectionTrilha5'

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

export function SliderTrilhasMobile() {
  const { activeSlideMobile, setActiveSlideMobile } = useAppContext()

  const cards = [0,1, 2, 3, 4]

  const clickNext = () => {
    activeSlideMobile < cards.length - 1 ? setActiveSlideMobile(activeSlideMobile + 1) : setActiveSlideMobile(0)
  }
  
  const clickPrevious = () => {
    activeSlideMobile > 0 ? setActiveSlideMobile(activeSlideMobile - 1) : setActiveSlideMobile(0)
  }

  return (
    <div className="mt-0 mb-12 flex justify-between shadow-xl m-0 p-0 md:h-[350px]  lg:mb-0 xl:w-[23.5rem] xl:h-[700px] 2xl:h-[800px] 2xl:mb-0">
      <div className="h-[350px]">
        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={40}
          totalSlides={5}
        >
          <Slider className="w-screen h-[350px]">
            <Slide index={activeSlideMobile} >
              <SectionTrilha1 />
            </Slide>
            <Slide index={activeSlideMobile} onTouchStart={()=>setActiveSlideMobile(0)}>
              <SectionTrilha2 />
            </Slide>
            <Slide index={activeSlideMobile} onTouchStart={()=>setActiveSlideMobile(1)}>
              <SectionTrilha3 />
            </Slide>
            <Slide index={activeSlideMobile} onTouchStart={()=>setActiveSlideMobile(2)}>
              <SectionTrilha4 />
            </Slide>
            <Slide index={activeSlideMobile} onTouchStart={()=>setActiveSlideMobile(3)}>
              <SectionTrilha5 />
            </Slide>
          </Slider>

          <div className="w-screen h-auto absolute top-32 flex justify-between z-10 1sm:top-72 md:top-36 md:pe-6 md:ps-6 lg:w-[96%] lg:top-[18rem] xl:w-[106%] 2xl:w-[104%] 2xl:top-[25rem]">
            <ButtonBack>
              <div className="w-14 h-14 p-2 mx-0 rounded-full flex justify-center items-center opacity-85 hover:cursor-pointer lg:hover:bg-red-900 bg-red-700">
                <FaAngleLeft
                  size={25}
                  className="pr-1  1sm:text-gray-400 lg:text-white"
                  onClick={()=>clickPrevious()}
                />
              </div>
            </ButtonBack>

            <ButtonNext>
              <div className="w-14 h-14 p-2 mx-0 rounded-full flex justify-center items-center opacity-85 hover:cursor-pointer lg:hover:bg-red-900 bg-red-700">
                <FaAngleRight
                  size={20}
                  className="pl-1  1sm:1sm:text-gray-400 lg:text-white"
                  onClick={()=>clickNext()}
                />
              </div>
            </ButtonNext>
          </div>
        </CarouselProvider>
      </div>
    </div>
  )
}