"use client"

import Image from "next/image";
import { kineticLight } from "../../fonts";

export function CardObjetivo({ index, icon, description }: any) {
  return (
    <div className="w-screen h-full flex flex-col justify-center items-center lg:w-auto">
      <div className="w-80 h-56 my-6 mx-0 px-0 flex justify-center items-center p-0 gap-6 1sm:h-48 md:w-96 lg:gap-0 xl:gap-2 xl:min-w-[500px] border rounded-xl shadow-md shadow-gray-400">

        <div className="w-1/3 m-0 pl-2 3xl:ml-3">
          <Image
            src={`/img/${icon}`}
            width={100}
            height={100}
            alt="Icon"
          />
        </div>
        <div className="w-2/3 pl-1 pr-2 3xl:pr-4 3xl:pl-0">
          <span className={`${kineticLight.className} text-lg 1sm:text-xl xl:text-2xl`}>{description}</span>
        </div>
      </div>
    </div>
  )
}