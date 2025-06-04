import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { IoClose } from "react-icons/io5"
import { GiHamburgerMenu } from "react-icons/gi";
import { menuItems } from '../data/menuItems'
import headerImg from "../../../public/img/logo-header-abdi.png";
import { Link as LinkScroll } from 'react-scroll';
import { PoppinsRegular } from '../fonts'

import { useTranslations } from "next-intl";

import DropLanguage from './drop-languages';

const NavbarMobile = () => {
  const [showMenu, setShowMenu] = useState(false)

  const handleShowMenu = (mobile: boolean) => {
    if (mobile) setShowMenu(!showMenu);
  }

  const translate = useTranslations("NavBar")

  return (
    <nav className="w-auto px-0 h-12 fixed top-0 right-0 left-0 z-10 p-3 mt-0 bg-black md:invisible lg:h-0">
      <div className="w-full flex justify-between px-6">
        <Link className="p-0" href="/" >
          <Image
            src={headerImg}
            alt="Logo Curicaca"
            width={250}
            height={250}
            className="fixed top-4 w-[60px] 1sm:w-[80px]"
          />
        </Link>


        <div className='flex justify-end py-0 px-2'>
          <DropLanguage />
          <div className="ml-4">
            {showMenu ?
              <IoClose size={30} color='#ffff' onClick={() => handleShowMenu(true)} />
              :
              <GiHamburgerMenu size={30} color='#ffff' onClick={() => handleShowMenu(true)} />
            }
          </div>
        </div>
      </div>

      {showMenu &&
        <div className="w-full flex flex-col items-start py-4 px-6 bg-black 1sm:items-end">

          {menuItems.map((data, i) => (
            <LinkScroll
              to={data.url}
              spy={true}
              smooth={true}
              offset={-10}
              duration={500}
              onClick={() => setShowMenu(false)}
              className="w-full text-start text-white py-2 mb-4 1sm:text-end 1sm:px-4 1sm:w-[15rem]"
            >
              <span className={`${PoppinsRegular.className} w-full`}>
                {data.id === 1 ? translate('inicio') : (data.id === 2 ? translate('sobre') : translate('noticias'))}
              </span>
            </LinkScroll>
          ))}

          <div className="bg-curicaca-red text-white text-sm px-4 py-1 mt-3 rounded-full" onClick={() => handleShowMenu(true)}>
            <Link
              href="/pt/taguatinga"
              className="w-full text-start text-white py-2 mb-4 1sm:text-end 1sm:px-4 1sm:w-[15rem]"
            >
              <span className={`${PoppinsRegular.className} w-full`}>
                {translate('cadastro')}
              </span>
            </Link>
          </div>
          {/* <div className="bg-curicaca-red text-white text-sm px-4 py-1 mt-3 rounded-full" onClick={() => handleShowMenu(true)}>
            <Link
              href="http://painel.festivalcuricaca.com.br/login"
              className="w-full text-start text-white py-2 mb-4 1sm:text-end 1sm:px-4 1sm:w-[15rem]"
            >
              <span className={`${PoppinsRegular.className} w-full`}>
                {translate('painelParticipante')}
              </span>
            </Link>
          </div> */}
        </div>
      }
    </nav>
  )
}

export default NavbarMobile