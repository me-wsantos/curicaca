import { useState } from "react"
import Image from "next/image"
import portugues from "@/public/img/brazil.png"
import ingles from "@/public/img/english.png"
import espanhol from "@/public/img/spain.png"
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing';

export default function DropLanguage() {
  const [showItems, setShowItems] = useState(false)
  const [locales] = useState(["pt", "en", "es"])
  const locale = useLocale()

  return (
    <div className="pt-1 ml-4">
      <div
        className="d-flex justify-content-between align-items-center mb-2 cursor-pointer"
        onClick={() => setShowItems(!showItems)}
      >
        <Image
          src={locale === "pt" ? portugues : (locale === "es" ? espanhol : ingles)}
          width={25}
          height={25}
          alt="Idioma"
        />
      </div>

      {showItems && (
        <div>
          {locales.filter(data => data != locale).map((loc) => (
            <div
              key={loc}
              className="cursor-pointer pb-2"
              onClick={() => setShowItems(!showItems)}
            >
              <Link className="navlink" href="/" locale={loc}>
                <Image
                  src={loc === "pt" ? portugues : (loc === "es" ? espanhol : ingles)}
                  width={25}
                  height={25}
                  alt="Idioma"
                />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}