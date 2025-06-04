import { kineticBlack } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha02() {
  const translate = useTranslations("Section06")
  const locale = useLocale()

  const fontStyle1 = locale === "en" ? 'xl:text-[2rem] 2xl:text-[2.6rem]' : (locale === "es" ? 'xl:text-[1.8rem] 2xl:text-[2.5rem]' : '2xl:text-[3rem]')
  const fontStyle2 = locale === "en" ? 'xl:text-[1.6rem] 2xl:text-[2.1rem]' : (locale === "es" ? '2xl:text-[2.7rem]' : '2xl:text-[2.6rem]')
  const fontStyle3 = locale === "en" ? 'xl:text-[1.4rem] 2xl:text-[1.9rem]' : (locale === "es" ? '2xl:text-[2.0rem]' : '2xl:text-[1.9rem]')

  return (
    <div className="h-full w-full bg-[url('/img/trilha2.png')] bg-cover bg-no-repeat text-white flex flex-col items-center justify-start pt-28 xl:w-[225px] 2xl:w-full 2xl:bg-[100%]">
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center text-[2.1rem] 2xl:mb-6 ${fontStyle1}`}>
        {translate('t2-desc-1')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center text-[1.9rem] 2xl:mb-4 ${fontStyle2}`}>
        {translate('t2-desc-2')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center text-[1.4rem] ${fontStyle3}`}>
        {translate('t2-desc-3')}
      </h1>
    </div>
  )
}