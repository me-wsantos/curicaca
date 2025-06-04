import { PoppinsBold } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha10Mobile() {
  const translate = useTranslations("Section06")
  const locale = useLocale()

  const fontStyle1 = locale === "en" ? 'text-[2rem] md:text-[3rem]' : (locale === "es" ? 'text-[1.6rem] md:text-[2rem]' : 'text-[1.6rem] md:text-[2rem]')
  const fontStyle2 = locale === "en" ? 'text-[1.4rem] md:text-[2.1rem]' : (locale === "es" ? 'text-[2.2rem] md:text-[2.7rem]' : 'text-[2.2rem] md:text-[2.7rem]')
  const fontStyle3 = locale === "en" ? 'text-[1.6rem] md:text-[2.2rem]' : (locale === "es" ? 'text-[1.8rem] md:text-[2.2rem]' : 'text-[1.8rem] md:text-[2.2rem]')
  const fontStyle4 = locale === "en" ? 'text-[1.9rem] md:text-[2.6rem]' : (locale === "es" ? 'text-[2.8rem] md:text-[3.4rem]' : 'text-[2.8rem] md:text-[3.4rem]')

  return (
    <div className="mt-0 mb-12 flex flex-col  justify-between w-full h-[450px] shadow-xl 1sm:mb-8 1sm:w-1/2 md:justify-between md:mb-0">
      <div className="h-[350px] bg-white text-curicaca-blue-1 flex flex-col items-center justify-start pt-16 p-2 lg:h-0">

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center lg:h-0 lg:p-0 ${fontStyle1}`}>
          {translate('t10-desc-1')}
        </h1>  

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center md:mt-2 lg:h-0 lg:p-0 ${fontStyle2}`}>
          {translate('t10-desc-2')}
        </h1>  

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center md:mt-2 lg:h-0 lg:p-0 ${fontStyle3}`}>
          {translate('t10-desc-3')}
        </h1>

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center md:mt-2 lg:h-0 lg:p-0 ${fontStyle4}`}>
          {translate('t10-desc-4')}
        </h1>
      </div>
    </div>
  )
}