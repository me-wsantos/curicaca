import { kineticBlack } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha10() {
  const translate = useTranslations("Section06")
  const locale = useLocale()
  
  const fontStyle1 = locale === "en" ? 'xl:text-[2.2rem] 2xl:text-[3rem]' : (locale === "es" ? '2xl:text-[2.1rem]' : '2xl:text-[2rem]')
  const fontStyle2 = locale === "en" ? 'xl:text-[1.5rem] 2xl:text-[2.1rem]' : (locale === "es" ? '2xl:text-[2.9rem]' : '2xl:text-[2.9rem]')
  const fontStyle3 = locale === "en" ? '2xl:text-[2.2rem]' : (locale === "es" ? '2xl:text-[2.1rem]' : '2xl:text-[2.1rem]')
  const fontStyle4 = locale === "en" ? 'xl:text-[1.9rem] 2xl:text-[2.6rem]' : (locale === "es" ? '2xl:text-[3.5rem]' : '2xl:text-[3.3rem]')

  return (
    <div className="h-full w-full bg-[url('/img/trilha10.png')] bg-cover bg-no-repeat text-curicaca-blue-1 flex flex-col items-center justify-start pt-28 xl:w-[225px] 2xl:w-full 2xl:bg-[100%]">
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.5rem] 2xl:mb-4 ${fontStyle1}`}>
        {translate('t10-desc-1')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[2.2rem] mb-2 2xl:mb-7 ${fontStyle2}`}>
        {translate('t10-desc-2')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[2.33rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.65rem] mb-3 2xl:mb-9 ${fontStyle3}`}>
        {translate('t10-desc-3')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[2.33rem] flex justify-center items-center w-screen text-center tracking-wider text-[2.7rem] ${fontStyle4}`}>
        {translate('t10-desc-4')}
      </h1>
    </div>
  )
}