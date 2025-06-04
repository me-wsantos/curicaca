import { PoppinsBold } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha04Mobile() {
  const translate = useTranslations("Section06")
  const locale = useLocale()
  
  const fontStyle1 = locale === "en" ? 'text-[1.1rem] md:text-[1.8rem]' : (locale === "es" ? 'text-[1.6rem] md:text-[2.5rem]' : 'text-[1.6rem] md:text-[2.5rem]')
  const fontStyle2 = locale === "en" ? 'text-[1.3rem] md:text-[2.1rem]' : (locale === "es" ? 'text-[1.7rem] md:text-[2.8rem]' : 'text-[2.3rem] md:text-[3.5rem]')
  const fontStyle3 = locale === "en" ? 'text-[2.2rem] md:text-[3.6rem]' : (locale === "es" ? 'text-[1.25rem] md:text-[2.0rem]' : 'text-[1.4rem] md:text-[2.15rem]')
  
  return (
    <div className="mt-0 mb-12 flex flex-col  justify-between w-full h-[450px] shadow-xl 1sm:mb-8 1sm:w-1/2 md:justify-between md:mb-0 lg:h-0">
      <div className="h-[350px] bg-curicaca-blue-2 text-white flex flex-col items-center justify-start pt-16 p-2 lg:h-0">

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] mt-0 flex items-center justify-center w-screen text-center lg:h-0 lg:p-0 ${fontStyle1}`}>
          {translate('t4-desc-1')}
        </h1>  

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] mt-0 flex items-center justify-center w-screen text-center md:mt-6 lg:h-0 lg:p-0 ${fontStyle2}`}>
          {translate('t4-desc-2')}
        </h1>

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] mt-0 flex items-center justify-center w-screen text-center md:mt-6 lg:h-0 lg:p-0 ${fontStyle3}`}>
          {translate('t4-desc-3')}
        </h1>  
      </div>
    </div>
  )
}