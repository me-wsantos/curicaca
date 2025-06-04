import { PoppinsBold } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha05Mobile() {
  const translate = useTranslations("Section06")
  const locale = useLocale()

  const fontStyle1 = locale === "en" ? 'text-[3rem] md:text-[4.2rem]' : (locale === "es" ? 'text-[1.8rem] md:text-[2.8rem]' : 'text-[1.8rem] md:text-[2.8rem]')
  const fontStyle2 = locale === "en" ? 'text-[1.25rem] md:text-[1.8rem]' : (locale === "es" ? 'text-[2.5rem] md:text-[3.8rem]' : 'text-[2.5rem] md:text-[3.8rem]')
  const fontStyle3 = locale === "en" ? 'text-[1.85rem] md:text-[2.8rem]' : (locale === "es" ? 'text-[1.8rem] md:text-[2.6rem]' : 'text-[1.8rem] md:text-[2.6rem]')
  const fontStyle4 = locale === "en" ? 'text-[1.8rem] md:text-[2.7rem]' : (locale === "es" ? 'text-[2.05rem] md:text-[3.0rem]' : 'text-[2.05rem] md:text-[3.0rem]')
  
  return (
    <div className="mt-0 mb-12 flex flex-col  justify-between w-full h-[450px] shadow-xl 1sm:mb-8 1sm:w-1/2 md:justify-between md:mb-0 lg:h-0">
      <div className="h-[350px] bg-white text-curicaca-blue-1 flex flex-col items-center justify-start pt-16 p-2 lg:h-0">
        
        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center lg:h-0 lg:p-0 ${fontStyle1}`}>
          {translate('t5-desc-1')}
        </h1>  
        
        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center md:mt-3 lg:h-0 lg:p-0 ${fontStyle2}`}>
          {translate('t5-desc-2')}
        </h1>  

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center md:mt-3 lg:h-0 lg:p-0 ${fontStyle3}`}>
          {translate('t5-desc-3')}
        </h1>

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center md:mt-3 lg:h-0 lg:p-0 ${fontStyle4}`}>
          {translate('t5-desc-4')}
        </h1>  
      </div>
    </div>
  )
}