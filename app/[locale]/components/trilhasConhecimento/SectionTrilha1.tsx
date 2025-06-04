import { useEffect } from 'react'
import { Trilha01Mobile } from './Trilha01Mobile'
import { Trilha02Mobile } from './Trilha02Mobile'
import useAppContext from '../../context/appContext'

export function SectionTrilha1() {
  const { setActiveSlideMobile } = useAppContext()

  useEffect(() => {
    setActiveSlideMobile(0)
  },[])

  return (
    <div 
      className="mt-0 mb-12 flex justify-between h-[500px] shadow-xl m-0 p-0 lg:mb-0 lg:w-[14rem] xl:w-[16.5rem] 2xl:w-[21.5rem] xl:h-[700px] 2xl:h-[800px] 2xl:mb-0"
    >
      <Trilha01Mobile/>
      <Trilha02Mobile/>
    </div>
  )
}