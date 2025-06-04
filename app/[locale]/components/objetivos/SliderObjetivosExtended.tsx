"use client"

import { SliderObjetivosItems } from "./SliderObjetivosItems";

export default function SliderObjetivosExtended() {
  return (
    <div className="invisible w-0 h-0 p-0 lg:h-full lg:visible lg:w-screen lg:mt-1">
      <div className="w-0 lg:w-full relative h-full">
        <div className="flex justify-between items-end overflow-clip py-0 lg:w-full">
          <SliderObjetivosItems />
        </div>
      </div>
    </div>
  )
}