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
  const translate = useTranslations("NavBar")

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-lg md:hidden">
      <div className="flex items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src={headerImg}
            alt="Logo Curicaca"
            width={60}
            height={60}
            className="w-[60px] h-auto"
          />
        </Link>

        <div className="flex items-center gap-4">
          <DropLanguage />
          <button 
            onClick={handleShowMenu}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {showMenu ? (
              <IoClose size={30} />
            ) : (
              <GiHamburgerMenu size={30} />
            )}
          </button>
        </div>
      </div>

      {showMenu && (
        <div className="absolute top-full left-0 right-0 bg-black border-t border-gray-800">
          <div className="px-4 py-2 space-y-4">
            {menuItems.map((item) => (
              <LinkScroll
                key={item.id}
                to={item.url}
                spy={true}
                smooth={true}
                offset={item.offset}
                duration={500}
                onClick={() => setShowMenu(false)}
                className="block text-white py-2 hover:text-curicaca-green-1 transition-colors"
              >
                <span className={PoppinsRegular.className}>
                  {item.id === 1 ? translate('inicio') : 
                   item.id === 2 ? translate('sobre') : 
                   translate('noticias')}
                </span>
              </LinkScroll>
            ))}

            <Link
              href="/pt/taguatinga"
              className="block text-white bg-curicaca-red px-4 py-2 rounded-full text-center hover:bg-curicaca-red-2 transition-colors"
              onClick={() => setShowMenu(false)}
            >
              <span className={PoppinsRegular.className}>
                {translate('cadastro')}
              </span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavbarMobile