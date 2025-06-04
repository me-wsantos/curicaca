import useAppContext from '../../context/appContext'
import { Trilha05Mobile } from './Trilha05Mobile'
import { Trilha06Mobile } from './Trilha06Mobile'
import { useEffect } from 'react'

export function SectionTrilha3() {
  const { setActiveSlideMobile } = useAppContext()

  useEffect(() => {
    setActiveSlideMobile(2)
  },[])
  
  return (
    <div className="mt-0 mb-12 flex justify-between h-[600px] shadow-xl m-0 p-0 lg:mb-0 lg:w-[14rem] xl:w-[16.5rem] 2xl:w-[21.5rem] xl:h-[700px] 2xl:h-[800px] 2xl:mb-0">
      <Trilha05Mobile/>
      <Trilha06Mobile/>
    </div>
  )
}