import { PoppinsBold } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha01Mobile() {
  const translate = useTranslations("Section06")
  const locale = useLocale()

  const fontStyle1 = locale === "en" ? 'text-[2.6rem] md:text-[3rem]' : (locale === "es" ? 'text-[2.5rem] md:text-[3.0rem]' : 'text-[2.5rem] md:text-[3.0rem]')
  const fontStyle2 = locale === "en" ? 'text-[1.7rem] md:text-[2rem]' : (locale === "es" ? 'text-[1.85rem] md:text-[2.15rem]' : 'text-[1.8rem] md:text-[2.15rem]')
  const fontStyle3 = locale === "en" ? 'text-[1.4rem] md:text-[1.7rem]' : (locale === "es" ? 'text-[1.1rem] md:text-[1.25rem]' : 'text-[1.0rem] md:text-[1.25rem]')
  const fontStyle4 = locale === "en" ? 'text-[1.3rem] md:text-[1.5rem]' : (locale === "es" ? 'text-[1.75rem] md:text-[2.1rem]' : 'text-[1.75rem] md:text-[2.1rem]')

  return (
    <div className="mt-0 mb-12 flex flex-col  justify-between w-full h-[500px] shadow-xl 1sm:mb-8 1sm:w-1/2 md:justify-between md:mb-0 lg:h-0">
      <div className="h-[350px] bg-curicaca-green-1 text-curicaca-blue-1 flex flex-col items-center justify-start pt-16 p-2 lg:h-0">
        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center lg:h-0 lg:p-0 ${fontStyle1}`}>{translate('t1-desc-1')}</h1>  
        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center md:mt-3 lg:h-0 lg:p-0 ${fontStyle2}`}>{translate('t1-desc-2')}</h1>  
        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center lg:h-0 lg:p-0 ${fontStyle3}`}>E {translate('t1-desc-3')}</h1>  
        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center lg:h-0 lg:p-0 ${fontStyle4}`}>{translate('t1-desc-4')}</h1>  
      </div>
    </div>
  )
}