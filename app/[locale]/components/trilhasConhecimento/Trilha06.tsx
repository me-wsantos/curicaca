import { kineticBlack } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha06() {
  const translate = useTranslations("Section06")
  const locale = useLocale()
  
  const fontStyle1 = locale === "en" ? 'xl:text-[1.5rem] 2xl:text-[2.1rem]' : (locale === "es" ? '2xl:text-[1.7rem]' : '2xl:text-[1.7rem]')
  const fontStyle2 = locale === "en" ? 'xl:text-[1.1rem] 2xl:text-[1.5rem] 2xl:mb-5' : (locale === "es" ? '2xl:text-[2.0rem] 2xl:mb-3' : '2xl:text-[1.8rem] 2xl:mb-3')
  const fontStyle3 = locale === "en" ? 'xl:text-[3.1rem] 2xl:text-[4.2rem]' : (locale === "es" ? '2xl:text-[2.1rem]' : '2xl:text-[2rem]')
  const fontStyle4 = locale === "en" ? 'xl:text-[2.4rem] 2xl:text-[3.3rem]' : (locale === "es" ? '2xl:text-[3.1rem]' : '2xl:text-[3rem]')

  return (
    <div className="h-full w-full bg-[url('/img/trilha6.png')] bg-cover bg-no-repeat text-curicaca-blue-1 flex flex-col items-center justify-start pt-28 xl:w-[225px] 2xl:w-full 2xl:bg-[100%]">
      <h1 className={`${kineticBlack.className} p-0 h-[2rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.2rem] 2xl:mb-4 ${fontStyle1}`}>
        {translate('t6-desc-1')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.3rem] xl:mb-2 ${fontStyle2}`}>
        {translate('t6-desc-2')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[2.33rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.4rem] mb-3 xl:mb-5 2xl:mb-8 ${fontStyle3}`}>
        {translate('t6-desc-3')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[2rem] flex justify-center items-center w-screen text-center tracking-wider text-[2.1rem] ${fontStyle4}`}>
        {translate('t6-desc-4')}
      </h1>
    </div>
  )
}