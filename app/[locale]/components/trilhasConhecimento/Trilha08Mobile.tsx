import { PoppinsBold } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha08Mobile() {
  const translate = useTranslations("Section06")
  const locale = useLocale()

  const fontStyle1 = locale === "en" ? 'text-[1.4rem] md:text-[2.2rem]' : (locale === "es" ? 'text-[1.6rem] md:text-[2.2rem]' : 'text-[1.6rem] md:text-[2.7rem]')
  const fontStyle2 = locale === "en" ? 'text-[1.5rem] md:text-[2.4rem]' : (locale === "es" ? 'text-[1.5rem] md:text-[2.1rem]' : 'text-[1.6rem] md:text-[2.7rem]')
  
  return (
    <div className="mt-0 mb-12 flex flex-col  justify-between w-full h-[450px] shadow-xl 1sm:mb-8 1sm:w-1/2 md:justify-between md:mb-0">
      <div className="h-[350px] bg-curicaca-blue-2 text-white flex flex-col items-center justify-start pt-16 p-2 lg:h-0">
        
        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] mt-0 flex items-center justify-center w-screen text-center lg:h-0 lg:p-0 ${fontStyle1}`}>
          {translate('t8-desc-1')}
        </h1>  

        <h1 className={`${PoppinsBold.className} p-0 h-[3rem] mt-0 flex items-center justify-center w-screen text-center md:mt-4 lg:h-0 lg:p-0 ${fontStyle2}`}>
          {translate('t8-desc-2')}
        </h1>  
      </div>
    </div>
  )
}