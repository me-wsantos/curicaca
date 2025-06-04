"use client"

import SliderObjetivos from "../../components/objetivos/SliderObjetivos"
import SliderObjetivosExtended from "../../components/objetivos/SliderObjetivosExtended"
import { kineticBold } from "../../fonts"
import { useTranslations } from "next-intl"

export function Section05({ id }: any) {
	const translate = useTranslations("Section05")

	return (
		<>
			<div id={id}
				className=" bg-white px-3 mx-auto mt-4 min-h-[200px] bg-objetivos md:bg-[url('/img/bg-objetivos-md.png')] lg:bg-[url('/img/bg-objetivos-lg.png')] 2xl:bg-[url('/img/bg-objetivos-2xl.png')] flex flex-col pb-16 justify-start p-4 w-100 md:mt-0 lg:pt-16 lg:items-center lg:h-auto xl:px-28 xl:pt-16"
			>
				<h2 className={`${kineticBold.className} w-full text-[1.7rem] font-bold text-center mb-8 tracking-wider md:text-3xl xl:text-4xl`}>
					{ translate('objetivos') }
				</h2>

				<div className="m-3 mt-0 flex flex-col justify-center items-center lg:invisible lg:h-0">
					<SliderObjetivos />
				</div>

				<div className="invisible mx-6 flex flex-col justify-center items-center lg:visible lg:h-96">
					<SliderObjetivosExtended />
				</div>

			</div>

		</>
	)
}