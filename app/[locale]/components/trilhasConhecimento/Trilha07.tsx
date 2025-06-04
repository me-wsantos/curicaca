import { kineticBlack } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha07() {
  const translate = useTranslations("Section06")
  const locale = useLocale()

  const fontStyle1 = locale === "en" ? 'xl:text-[2.8rem] 2xl:text-[4rem]' : (locale === "es" ? 'xl:text-[1.7rem] 2xl:text-[2.3rem]' : '2xl:text-[2.8rem]')
  const fontStyle2 = locale === "en" ? 'xl:text-[1.2rem] 2xl:text-[1.7rem]' : (locale === "es" ? 'xl:text-[2.3rem] 2xl:text-[3.15rem]' : '2xl:text-[3.15rem]')
  const fontStyle3 = locale === "en" ? 'xl:text-[2rem] 2xl:text-[2.9rem]' : (locale === "es" ? 'xl:text-[1.6rem] 2xl:text-[2.25rem]' : '2xl:text-[1.5rem]')
  const fontStyle4 = locale === "en" ? 'xl:text-[1.4rem] 2xl:text-[2rem]' : (locale === "es" ? 'xl:text-[2.1rem] 2xl:text-[2.9rem]' : '2xl:text-[2.9rem]')

  return (
    <div className="h-full w-full bg-[url('/img/trilha7.png')] bg-cover bg-no-repeat text-white flex flex-col items-center justify-start pt-28 xl:w-[225px] 2xl:w-full 2xl:bg-[100%]">
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.9rem] 2xl:mb-4 ${fontStyle1}`}>
        {translate('t7-desc-1')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[2.2rem] mb-0 2xl:mb-5 ${fontStyle2}`}>
        {translate('t7-desc-2')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.05rem] 2xl:mb-4 ${fontStyle3}`}>
        {translate('t7-desc-3')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[2.33rem] flex justify-center items-center w-screen text-center tracking-wider text-[2.05rem] ${fontStyle4}`}>
        {translate('t7-desc-4')}
      </h1>
    </div>
  )
}