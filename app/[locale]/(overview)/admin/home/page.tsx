'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { RiDownloadCloudFill } from 'react-icons/ri'
import { IoMdLogOut } from "react-icons/io";
import { exportToExcel } from '@/app/[locale]/services/exportExcel'
import { deleteCookie, getCookie } from 'cookies-next'
import { RiDeleteBinFill } from "react-icons/ri"
import { IUser } from '@/app/interfaces'
import { ProtectedRoutes } from '@/app/hooks/ProtectedRoute'

export default function Registers() {
  const [registers, setRegisters] = useState([])
  const [userLogged, setUserLogged] = useState<IUser>({} as IUser)

  const { push } = useRouter()
  
  useEffect(() => {
    axios.get('/api/register')
    .then((response) => {
      setRegisters(response.data.registers)
    })
  }, [])
  
  useEffect(() => {
    const cookieStore = getCookie("@curicaca");
    const obj = cookieStore ? JSON.parse(cookieStore as string) : null;
    setUserLogged(obj);
  },[]);

  const logOut = () => {
    deleteCookie("@curicaca");
    push("/pt/admin")
  }

  const handleDelete = async (id: number) => {
    await axios.delete(`/api/register`, { data: { id } })
    setRegisters(registers.filter((data: any) => data.id !== id))
  }

  const dateFormat = (date: string) => {
    const register = new Date(date)
    const day = register.getDate().toString().length < 2 ? register.getDate().toString().padStart(2, "0") : register.getDate();
    const month = register.getMonth();
    const year = register.getFullYear();

    return `${day}/${month + 1}/${year}`
  }

  return (
    <ProtectedRoutes>
      <div className="w-screen m-0 p-0 h-[500px] flex flex-col justify-start items-center">
        <div className="w-full py-6 flex justify-between bg-gray-200 items-center xl:max-w-full px-48">
          <h1 className="p-2 text-bold text-xl ">Total de cadastros: {registers.length}</h1>

          <div className="flex">
            <div
              className="px-2 hover:cursor-pointer" title="exportar para excel"
              onClick={ ()=>exportToExcel() }
            >
              <RiDownloadCloudFill size={40} color={"#478F76"} />
            </div>
            
            <div
              className="px-2 hover:cursor-pointer" title="Sair"
              onClick={ () => logOut() }
            >
              <IoMdLogOut size={40} color={"#999999"} />
            </div>
          </div>
        </div>

        <div className="w-full h-screen xl:max-w-full px-48">
          <div>
            <div className="flex justify-around">
              <div className="border-y w-1/2 text-sm font-extrabold py-1">Nome</div>
              <div className="border-y w-0 text-sm font-extrabold py-1 invisible md:visible md:w-1/2">E-mail</div>
              <div className="border-y w-1/2 text-sm font-extrabold py-1">Cargo</div>
              <div className="border-y w-0 text-sm font-extrabold py-1 invisible md:visible md:w-1/2">Empresa</div>
              <div className="border-y w-0 text-sm font-extrabold py-1 invisible md:visible md:w-1/2">Data cadastro</div>

              { userLogged && userLogged.admin && (
                <div className="border-y w-0 text-sm font-extrabold py-1 invisible md:visible md:w-1/2">Excluir</div>
              )}
            </div>
          </div>

          <div className="overflow-hidden">
            {
              registers.map((data: any) => (
                <div key={data.id} className="flex justify-around hover:bg-gray-100">
                  <div className="border-y w-1/2 text-sm p-0">{data.nome}</div>
                  <div className="border-y w-0 text-sm p-0 invisible md:visible md:w-1/2">{data.email}</div>
                  <div className="border-y w-0 text-sm p-0 invisible md:visible md:w-1/2">{data.cargo}</div>
                  <div className="border-y w-1/2 text-sm p-0 ">{data.empresa}</div>
                  <div className="border-y w-0 text-sm p-0 invisible md:visible md:w-1/2">{ dateFormat(data.created_at) }</div>
                  { userLogged && userLogged.admin && (
                    <div 
                      className="border-y w-0 text-sm p-0 invisible md:visible md:w-1/2 cursor-pointer"
                      onClick={ () => handleDelete(data.id) }
                    >
                      <RiDeleteBinFill size={20} color='#cc0000' />
                    </div>
                  )}
                </div>
              ))
            }

          </div>
        </div>
      </div>
    </ProtectedRoutes>
  )
}
