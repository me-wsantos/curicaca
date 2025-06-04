import Link from "next/link"
import Image from "next/image"
import { PoppinsRegular } from '../fonts'
import { MdEmail } from "react-icons/md"
import { Link as LinkScroll } from 'react-scroll'
import { menuItems } from '../data/menuItems'
import { useTranslations } from "next-intl"

export default function Footer() {
  const tFooter = useTranslations("Footer")
  const tNavBar = useTranslations("NavBar")

  return (
    <section className="w-screen p-0 m-0 bg-curicaca-green-1 pt-8 -z-0">
      <div className="w-full flex flex-col items-center justify-between max-w-7xl mx-auto pb-8 md:items-start md:flex-row-reverse 2xl:pb-12">
        <div className="w-screen h-auto px-4 pt-4 flex flex-col justify-start items-start mx-auto md:flex-row md:w-1/2 md:px-0 2xl:m-0 xl:pt-6">
          <div className="w-full flex flex-col justify-start items-start 1sm:justify-center 1sm:items-center md:w-1/2 md:pt-9 xl:md:pt-0 xl:mr-32">

            {menuItems.map((data) => (
              <LinkScroll
                key={data.id}
                to={data.url}
                spy={true}
                smooth={true}
                offset={ data.id == 1 ? 300 : -50 }
                duration={500}
                className={`${PoppinsRegular.className} text-base text-black text-start py-2 hover:cursor-pointer hover:text-white`}
              >
                <span 
                  className={`${PoppinsRegular.className} w-full`}
                >
                  { data.id === 1 ? tNavBar('inicio') : (data.id === 2 ? tNavBar('sobre') : tNavBar('noticias') ) }
                </span>
              </LinkScroll>
            ))}

            <Link
                href="/pt/taguatinga" target="_parent"
                className={`${PoppinsRegular.className} text-base text-black text-start py-2 hover:cursor-pointer hover:text-white`}
              >
                <span 
                  className={`${PoppinsRegular.className} w-full`}
                >
                  { tNavBar('cadastro') }
                </span>
              </Link>
          </div>

          <div className="w-full flex flex-col items-center xl:w-2/3 xl:mt-2">
            <div className="w-full flex-col items-start 1sm:items-center 1sm:justify-center md:items-start">
              <h2 className={`${PoppinsRegular.className} text-curicaca-blue-3 text-start text-xl mt-8 1sm:text-center md:text-start md:mt-0 md:text-base`}>
                { tFooter('faleConosco') }
              </h2>

              <div className="flex items-center justify-start mt-4 1sm:justify-center md:justify-start">
                <MdEmail size={25} color="#0665EF" className="mr-4" />
                <Link href="mailto:curicaca@abdi.com.br">curicaca@abdi.com.br</Link>
              </div>
            </div>

            <h2 className={`${PoppinsRegular.className} w-full text-curicaca-blue-3 text-start text-xl mt-8 1sm:text-center md:text-start md:text-base`}>
              { tFooter('follow') }
            </h2>

            <div className="w-full flex justify-between items-center mt-3 md:w-full md:flex-col lg:items-start">
              <div className="w-full flex 1sm:justify-center md:my-1 md:justify-start lg:w-2/3 xl:w-72 2xl:w-56">
                <a className="p-0 pr-2 m-0 1sm:px-4 md:p-0 md:mr-6" aria-current="page" href="https://www.instagram.com/festivalcuricaca"
                  title="instagram" target="_blank">
                  <Image
                    src="/img/sm-instagram.svg"
                    alt="instagram"
                    width={25}
                    height={25}
                    className="w-10 h-9 p-[5px] bg-white rounded-full 1sm:w-8 1sm:h-8"
                  />
                </a>

                <a className="pr-1 pl-1 m-0 1sm:px-4 md:p-0 md:mx-6" aria-current="page" href="https://x.com/curicacadf"
                  title="twitter" target="_blank">
                  <Image
                    src="/img/sm-x.svg"
                    alt="x"
                    width={13}
                    height={13}
                    className="w-10 h-9 p-[5px] bg-white rounded-full 1sm:w-8 1sm:h-8"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="w-screen h-auto mt-16 flex flex-col justify-center items-center mx-auto md:w-1/2 xl:px-6 2xl:px-0 2xl:items-start 2xl:mt-16">
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/img/curicaca01.png"
              alt="TikTok"
              width={270}
              height={250}
              className="2xl:w-[350px]"
            />
            <span className="w-full text-black text-center text-sm mt-3 2xl:text-lg">
              { tFooter('slogan') }
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}