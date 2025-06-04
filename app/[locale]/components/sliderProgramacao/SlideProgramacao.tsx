import { useEffect } from 'react'
import Image from 'next/image'
import useAppContext from '../../context/appContext'
import Link from 'next/link'

interface Props {
  index: number
}

export function SlideProgramacao({ index }: Props) {
  const { setActiveSlideMobile } = useAppContext()

  useEffect(() => {
    setActiveSlideMobile(0)
  }, [])

  return (
    <div className="w-full h-screen">
      <Link
        href="/pt/taguatinga" target="_parent"
        title="Ver detalhes do evento"
      >
        <div
          className={`w-full`}
        >
          <Image
            src={`/img/programacao/programacao0${index}.png`}
            alt="Programação"
            width={250}
            height={250}
            className="w-full h-full object-contain object-center"
          />
        </div>
      </Link>
    </div>
  )
}