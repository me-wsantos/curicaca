import { Trilha01 } from './Trilha01'
import { Trilha02 } from './Trilha02'
import { Trilha03 } from './Trilha03'
import { Trilha04 } from './Trilha04'
import { Trilha05 } from './Trilha05'

export function SectionTrilha1Extended() {
  return (
    <div className="mt-0 mb-12 flex justify-between h-[500px] shadow-xl m-0 p-0 lg:mb-0 lg:w-[14rem] xl:w-[15.5rem] xl:h-[700px] 2xl:w-[21.5rem] 2xl:h-[800px] 2xl:mb-0">
      <Trilha01/>
      <Trilha02/>
      <Trilha03/>
      <Trilha04/>
      <Trilha05/>
    </div>
  )
}