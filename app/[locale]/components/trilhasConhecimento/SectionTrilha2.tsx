import { useEffect, useState } from 'react'
import { Trilha03Mobile } from './Trilha03Mobile'
import { Trilha04Mobile } from './Trilha04Mobile'
import useAppContext from '../../context/appContext'

export function SectionTrilha2() {
  const { setActiveSlideMobile } = useAppContext()

  useEffect(() => {
    setActiveSlideMobile(1)
  },[])

  return (
    <div className="mt-0 mb-12 flex justify-between h-[600px] shadow-xl m-0 p-0 lg:mb-0 lg:w-[14rem] xl:w-[16.5rem] 2xl:w-[21.5rem] xl:h-[700px] 2xl:h-[800px] 2xl:mb-0"
    >
      <Trilha03Mobile/>
      <Trilha04Mobile/>
    </div>
  )
}