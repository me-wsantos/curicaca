import { useEffect } from 'react'
import { Trilha07Mobile } from './Trilha07Mobile'
import { Trilha08Mobile } from './Trilha08Mobile'
import useAppContext from '../../context/appContext'

export function SectionTrilha4() {
  const { setActiveSlideMobile } = useAppContext()
  
  useEffect(() => {
    setActiveSlideMobile(3)
  },[])

  return (
    <div className="mt-0 mb-12 flex justify-between h-[600px] shadow-xl m-0 p-0 lg:mb-0 lg:w-[14rem] xl:w-[16.5rem] 2xl:w-[21.5rem] xl:h-[700px] 2xl:h-[800px] 2xl:mb-0">
      <Trilha07Mobile/>
      <Trilha08Mobile/>
    </div>
  )
}