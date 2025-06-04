import { kineticBlack } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Programacao09() {
  const translate = useTranslations("Section06")
  const locale = useLocale()

  const fontStyle1 = locale === "en" ? 'xl:text-[1.5rem] 2xl:text-[2.1rem]' : (locale === "es" ? '2xl:text-[1.6rem]' : '2xl:text-[1.7rem]')
  const fontStyle2 = locale === "en" ? 'xl:text-[1.15rem] 2xl:text-[1.6rem]' : (locale === "es" ? 'xl:text-[1.8rem] 2xl:text-[2.55rem]' : '2xl:text-[2.2rem]')
  const fontStyle3 = locale === "en" ? 'xl:text-[1.8rem] 2xl:text-[2.5rem]' : (locale === "es" ? 'xl:text-[1.65rem] 2xl:text-[2.4rem]' : '2xl:text-[2.1rem]')
  const fontStyle4 = locale === "en" ? 'xl:text-[2.2rem] 2xl:text-[3.2rem]' : (locale === "es" ? 'xl:text-[3.3rem] 2xl:text-[4.75rem]' : '2xl:text-[4.7rem]')

  return (
    <div className="h-full w-full bg-[url('/img/trilha9.png')] bg-cover bg-no-repeat text-white flex flex-col items-center justify-start pt-28 xl:w-[225px] 2xl:w-full 2xl:bg-[100%]">
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.1rem] 2xl:mb-4 ${fontStyle1}`}>
        {translate('t9-desc-1')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.4rem] 2xl:mb-5 ${fontStyle2}`}>
        {translate('t9-desc-2')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[2.33rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.4rem] mb-4 2xl:mb-10 ${fontStyle3}`}>
        {translate('t9-desc-3')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[2.33rem] flex justify-center items-center w-screen text-center tracking-wider text-[3.0rem] ${fontStyle4}`}>
        {translate('t9-desc-4')}
      </h1>
    </div>
  )
}