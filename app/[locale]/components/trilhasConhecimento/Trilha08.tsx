import { kineticBlack } from '../../fonts'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'

export function Trilha08() {
  const translate = useTranslations("Section06")
  const locale = useLocale()

  const fontStyle1 = locale === "en" ? 'xl:text-[1.5rem] 2xl:text-[2.2rem]' : (locale === "es" ? 'xl:text-[1.6rem] 2xl:text-[2.6rem]' : 'xl:text-[1.6rem] 2xl:text-[2.6rem]')
  const fontStyle2 = locale === "en" ? 'xl:text-[1.7rem] 2xl:text-[2.5rem]' : (locale === "es" ? 'xl:text-[1.5rem] 2xl:text-[2.5rem]' : 'xl:text-[1.65rem] 2xl:text-[2.6rem]')

  return (
    <div className="h-full w-full bg-[url('/img/trilha8.png')] bg-cover bg-no-repeat text-white flex flex-col items-center justify-start pt-28 xl:w-[225px] 2xl:w-full 2xl:bg-[100%]">
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.9rem] 2xl:mb-4 ${fontStyle1}`}>
        {translate('t8-desc-1')}
      </h1>
      <h1 className={`${kineticBlack.className} p-0 h-[3rem] flex justify-center items-center w-screen text-center tracking-wider text-[1.4rem] mb-2 2xl:mb-5 ${fontStyle2}`}>
        {translate('t8-desc-2')}
      </h1>
    </div>
  )
}