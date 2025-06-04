'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { ModalLoading } from '../../components/ModalLoading';
import { setCookie } from 'cookies-next';
import { useLocale } from "next-intl";

export default function HomeAdmin() {
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { push } = useRouter();
  const locale = useLocale()

  const handleAccess = async (e: any) => {
    setLoading(true)
    e.preventDefault()

    if (!email.length || !passwd.length) {
      setMessage("Digite o e-mail e senha!")
      setShowMessage(true)
      hiddenMessage()
      setLoading(false)
      return
    }

    const validate = await axios.post(`/api/auth/`, { email, password: passwd })

    if (!validate.data.status) {
      setMessage(validate.data.message)
      setLoading(false)
      setShowMessage(true)
      hiddenMessage()
    } else {
      setCookie("@curicaca", JSON.stringify({ 
        name: validate.data.user.name,
        email: validate.data.user.email,
        admin: validate.data.user.admin
      }));

      push(`/${locale}/admin/home`)
    }
  }

  const hiddenMessage = () => {
    setTimeout(() => {
      setShowMessage(false)
    }, 3000)
  }

  return (
    <>
      <form onSubmit={(e) => handleAccess(e)}>

        { loading && <ModalLoading /> }

        <div className="bg-blue-100 p-0 m-0 h-screen w-screen flex justiy-center items-center">
          <div className="p-0 m-0 w-screen h-auto flex flex-col justify-start items-center">
            {
              showMessage &&
              <span className="bg-yellow-100 w-96 p-2 text-center text-yellow-800 rounded">{message}</span>
            }
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              placeholder="E-mail"
              className="w-96 block flex-1 bg-white border-0 rounded-lg bg-transparent mt-2 py-3 pl-2 text-gray-900 text-center placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <input
              type="password"
              name="password"
              id="password"
              value={passwd}
              placeholder="password"
              className="w-96 block flex-1 bg-white border-0 rounded-lg bg-transparent mt-2 py-3 pl-2 text-gray-900 text-center placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              onChange={(e) => setPasswd(e.target.value)}
            />
            <button
              className="w-96 px-4 py-2 my-4 text-white text-sm flex justify-center font-bold rounded-md bg-blue-600 tracking-wider"
              onClick={(e) => handleAccess(e)}
            >
              Enter
            </button>
          </div>
        </div>
      </form>
    </>
  )
}
