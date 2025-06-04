"use client"
import Image from "next/image";
import Link from "next/link";
import headerImg from "@/public/img/logo-header-abdi.png"
import { menuItems } from "../data/menuItems";
import useAppContext from "../context/appContext";
import { kineticRegular } from '../fonts'
import { useTranslations } from "next-intl";
import DropLanguage from "./drop-languages";

export default function NavbarEvento() {
  const { activeMenu } = useAppContext()
  const translate = useTranslations("NavBar")

  return (
    <>
      <section className="invisible w-screen fixed bg-black h-40 z-50 md:visible md:h-[4rem]">
        <div className="w-full flex flex-col items-center justify-between max-w-7xl mx-auto">
          <div className="w-screen h-auto px-4 flex flex-col justify-between items-center max-w-7xl mx-auto md:flex-row xl:px-6">
            <Link href="https://www.abdi.com.br/" title="Site ABDI">
              <Image
                src={headerImg}
                alt="Logo ABDI"
                width={80}
                height={90}
              />
            </Link>

            <div className="w-full h-12 flex justify-end mt-4">
              <div className="flex w-5/6 justify-end lg:px-0">
                {menuItems.map((data, i) => (
                  <Link
                    key={i}
                    href="/pt"
                    className={`text-xs text-white text-center h-8 px-4 py-1 flex justify-center items-center ${activeMenu == data.id ? 'bg-custom-blue text-white' : ''} rounded-full hover:text-white hover:bg-custom-blue hover:cursor-pointer md:text-[1rem] lg:px-6 lg:mx-4 lg:pt-[2px] xl:text-lg xl:h-8`}
                    title="Homepage do Festival Curicaca"
                  >
                    <span className={`${kineticRegular.className} w-full`}>
                      {data.id === 1 ? translate('inicio') : (data.id === 2 ? translate('sobre') : translate('noticias'))}
                    </span>
                  </Link>
                ))}
                <Link
                  href="/pt/taguatinga"
                  className="bg-curicaca-red text-white h-8 text-sm px-4 py-1 rounded-full flex justify-center items-center hover:cursor-pointer"
                >
                  <span className={`${kineticRegular.className} w-full xl:text-lg`}>
                  { translate('cadastro') }
                  </span>
                </Link>
                {/* <Link
                  href="http://painel.festivalcuricaca.com.br/login"
                  className="bg-curicaca-red text-white h-8 text-sm px-4 py-1 rounded-full flex justify-center items-center hover:cursor-pointer lg:mx-4"
                >
                  <span className={`${kineticRegular.className} w-full xl:text-lg`}>
                  { translate('painelParticipante') }
                  </span>
                </Link> */}
              </div>
              <DropLanguage />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
