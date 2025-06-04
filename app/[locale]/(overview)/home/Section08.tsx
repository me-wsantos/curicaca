import Link from "next/link"
import { kineticLight, kineticBold } from "../../fonts"
import { MdEmail } from "react-icons/md"
import { FaPhone } from "react-icons/fa6"
import { useTranslations } from "next-intl"

export function Section08({ id }: any) {
  const translate = useTranslations("Section08")

  return (
    <div id={id}
      className="px-3 bg-[url('/img/bg-section7.png')] bg-cover bg-no-repeat h-1/2 p-4 py-10 w-full flex flex-col items-center justify-center lg:pt-16 lg:bg-[url('/img/bg-section7-extend.png')] 2xl:h-[25rem]"
    >
      <div className="w-full h-full text-2xl leading-normal text-center text-white flex flex-col items-center 1sm:mt-6 md:max-w-xl lg:mt-0 lg:max-w-6xl xl:h-auto">
        <h1 className={`${kineticBold.className} text-3xl lg:text-4xl 2xl:text-5xl`}>{ translate('titulo') }</h1>
        <div className={`${kineticLight.className} text-lg tracking-wider py-4 xl:text-xl`}>{ translate('subtitulo') }</div>
        <div className={`${kineticLight.className} text-lg tracking-wider py-4 flex items-center xl:text-xl`}>
          <MdEmail size={25} color="#ffff" className="mr-2" />
          <Link href="mailto:ouvidoria@abdi.com.br" title="e-mail de contato">
            imprensacuricaca@abdi.com.br
          </Link>
        </div>
      </div>
    </div >
  )
}