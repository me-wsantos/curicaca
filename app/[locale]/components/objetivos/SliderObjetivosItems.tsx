import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { CardObjetivo } from './CardObjetivo';
import { objetivos } from '../../data/objetivos';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { useTranslations } from 'next-intl';

export function SliderObjetivosItems() {

  const translate = useTranslations("Section05")

  return (
    <div className="w-full mt-0 mb-12 flex justify-between h-[500px] m-0 p-0 lg:mb-0 xl:w-[23.5rem] xl:h-[700px] 2xl:h-[800px] 2xl:mb-0">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={40}
        totalSlides={3}
      >
        <Slider className="w-screen">
          <Slide index={0} className="">
            <div className="flex justify-center gap-6">
              <CardObjetivo index={objetivos[0].id} icon={objetivos[0].icon} description={translate('objetivo1')} />
              <CardObjetivo index={objetivos[1].id} icon={objetivos[1].icon} description={translate('objetivo2')} />
            </div>
          </Slide>
          <Slide index={1} className="">
            <div className="flex justify-center gap-6">
              <CardObjetivo index={objetivos[2].id} icon={objetivos[2].icon} description={translate('objetivo3')} />
              <CardObjetivo index={objetivos[3].id} icon={objetivos[3].icon} description={translate('objetivo4')} />
            </div>
          </Slide>
          <Slide index={2} className="">
            <div className="flex justify-center gap-6">
              <CardObjetivo index={objetivos[4].id} icon={objetivos[4].icon} description={translate('objetivo5')} />
              <CardObjetivo index={objetivos[5].id} icon={objetivos[5].icon} description={translate('objetivo6')} />
            </div>
          </Slide>
        </Slider>

        <div className="w-[90%] absolute flex justify-between right-0 z-0 left-[3.5rem] lg:w-[90%] lg:top-[5.5rem] xl:w-[85%] xl:left-[6rem] 2xl:w-[75%] 2xl:left-[13rem] 3xl:w-[59%] 3xl:left-[24.5rem]">
          <ButtonBack>
            <div className="w-[4rem] h-[4rem] p-2 mx-0 bg-red-700 rounded-full flex justify-center items-center opacity-85 hover:cursor-pointer hover:bg-red-900">
              <FaAngleLeft
                size={30}
                className="pr-1 text-white"
              />
            </div>
          </ButtonBack>

          <ButtonNext>
            <div className="w-[4rem] h-[4rem] p-2 mx-0 bg-red-700 rounded-full flex justify-center items-center opacity-85 hover:cursor-pointer hover:bg-red-900">
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