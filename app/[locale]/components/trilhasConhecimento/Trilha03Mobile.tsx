import { PoppinsBold } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha03Mobile() {
  const translate = useTranslations("Section06")
  const locale = useLocale()

  const fontStyle1 = locale === "en" ? 'text-[2.55rem] md:text-[3.5rem]' : (locale === "es" ? 'text-[1.1rem] md:text-[1.8rem]' : 'text-[1.1rem] md:text-[1.8rem]')
  const fontStyle2 = locale === "en" ? 'text-[0.85rem] md:text-[1.15rem]' : (locale === "es" ? 'text-[2.2rem] md:text-[3.6rem]' : 'text-[2.2rem] md:text-[3.6rem]')
  const fontStyle3 = locale === "en" ? 'text-[1.45rem] md:text-[2.0rem]' : (locale === "es" ? 'text-[1.4rem] md:text-[2.3rem]' : 'text-[1.4rem] md:text-[2.3rem]')
  
  return (
    <div className="mt-0 mb-12 flex flex-col  justify-between w-full h-[450px] shadow-xl 1sm:mb-8 1sm:w-1/2 md:justify-between md:mb-0 lg:h-0">
      <div className="h-[350px] bg-curicaca-red text-white flex flex-col items-center justify-start pt-16 p-2 lg:h-0">
        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] mt-0 flex items-center justify-center w-screen text-center lg:h-0 lg:p-0 ${fontStyle1}`}>
          {translate('t3-desc-1')}
        </h1>  

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] mt-0 flex items-center justify-center w-screen text-center md:mt-4 lg:h-0 lg:p-0 ${fontStyle2}`}>
          {translate('t3-desc-2')}
        </h1>  

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] mt-0 flex items-center justify-center w-screen text-center md:mt-6 lg:h-0 lg:p-0 ${fontStyle3}`}>
          {translate('t3-desc-3')}
        </h1>  
      </div>
    </div>
  )
}