import { kineticBlack } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha03() {
  const translate = useTranslations("Section06")
  const locale = useLocale()

  const fontStyle1 = locale === "en" ? 'xl:text-[2.8rem] 2xl:text-[3.7rem] 2xl:mb-4' : (locale === "es" ? '2xl:text-[1.6rem] 2xl:mb-2' : '2xl:text-[1.6rem] 2xl:mb-2')
  const fontStyle2 = locale === "en" ? 'xl:text-[.9rem] 2xl:text-[1.2rem]' : (locale === "es" ? '2xl:text-[3.0rem]' : '2xl:text-[3.0rem]')
  const fontStyle3 = locale === "en" ? 'xl:text-[1.5rem] 2xl:text-[2.1rem]' : (locale === "es" ? '2xl:text-[2.0rem]' : '2xl:text-[2.0rem]')

  return (
    <div className="h-full w-full bg-[url('/img/trilha3.png')] bg-cover bg-no-repeat text-white flex flex-col items-center justify-start pt-28 xl:w-[225px] 2xl:w-full 2xl:bg-[100%]">
      <h1 
        className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.1rem] ${fontStyle1}`}>
        {translate('t3-desc-1')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[2.1rem] mb-2 2xl:mb-4 ${fontStyle2}`}>
        {translate('t3-desc-2')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[2.33rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.4rem] ${fontStyle3}`}>
        {translate('t3-desc-3')}
      </h1>
    </div>
  )
}