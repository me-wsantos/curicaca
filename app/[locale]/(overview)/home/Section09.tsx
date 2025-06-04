"use client"

import Image from 'next/image'
import { kineticLight } from '../../fonts'
import CardParceiro from '../../components/cards/CardParceiro'
import { useTranslations } from 'next-intl'

export function Section09({ id }: any) {
	const translate = useTranslations("Section09")

	return (
		<div id={id}
			className="px-0 g-[url('/img/background-sec9.png')] bg-no-repeat bg-inherit w-screen h-auto flex flex-col items-center pb-16 p-0 lg:pt-16 lg:items-center lg:bg-[url('/img/background-sec9-extend.png')] lg:bg-no-repeat lg:bg-cover"
		>
			<div className="w-full h-full flex flex-col justify-center items-center 2xl:mt-0">
				<div className="p-0 flex flex-col justify-start mt-8 md:justify-center">
					<span
						className={`${kineticLight.className} text-black font-bold text-xl text-center 2xl:text-2xl`}>
						{translate('realizacao')}
					</span>

					<Image
						src={"/img/abdi.png"}
						width={250}
						height={250}
						alt="logomarcas"
						className="mt-8 w-[200px]"
					/>
				</div>

				<div className="p-0 flex flex-col justify-start mt-20 md:justify-center">
					<span
						className={`${kineticLight.className} text-black font-bold text-xl text-center 2xl:text-2xl`}>
						{translate('parceiros')}
					</span>
				</div>

				<div className="w-full flex flex-col justify-center items-center mt-2 lg:flex-row lg:mt-24 xl:mt-0 xl:max-w-6xl 2xl:ml-0">
					<div className="w-full flex justify-center items-center text-gray-500 lg:w-auto xl:max-w-6xl 2xl:ml-0">
						<CardParceiro
							main={true}
							image="/img/mdic.svg"
							style="w-[50rem]"
						/>
					</div>
				</div>

				<div className="w-full grid grid-cols-3 justify-center items-center p-0 mt-0 place-items-center lg:flex lg:justify-between lg:mt-12 xl:mt-0 xl:max-w-7xl 2xl:ml-0">
					<CardParceiro image="/img/parceiros/petrobras.svg" style="xl:w-[7rem] xl:h-[6rem]" />
					<CardParceiro image="/img/parceiros/cni.svg" />
					<CardParceiro image="/img/parceiros/globo.png" style="w-[3.5rem] h-[3.5rem] 2xl:w-[4rem] 2xl:h-[4rem]" />
					<CardParceiro image="/img/parceiros/finep.svg" style="2xl:w-[8rem] 2xl:h-[6rem]" />
					<CardParceiro image="/img/parceiros/bndes.svg" style="2xl:w-[6rem] 2xl:h-[4rem]" />
					<CardParceiro image="/img/parceiros/unb.svg" style="2xl:w-[6rem] 2xl:h-[4rem]" />

				</div>
				<div className="w-full grid grid-cols-3 justify-center items-center p-0 mt-0 place-items-center lg:flex lg:justify-between lg:mt-12 xl:mt-0 xl:max-w-7xl 2xl:ml-0">
					<CardParceiro image="/img/parceiros/ifb.svg" style="2xl:w-[6rem] 2xl:h-[6rem]" />
					<CardParceiro image="/img/parceiros/ucb.png" style="2xl:w-[6rem] 2xl:h-[6rem]" />
					<CardParceiro image="/img/parceiros/senai.png" style="2xl:w-[8rem] 2xl:h-[6rem]" />
					<CardParceiro image="/img/parceiros/pdbrasil.png" style="2xl:w-[10rem] 2xl:h-[4rem]" />
					<CardParceiro image="/img/parceiros/abimde.webp" style="2xl:w-[6rem] 2xl:h-[6rem]" />
					<CardParceiro image="/img/parceiros/oficina.png" style="2xl:w-[9rem] 2xl:h-[3.5rem]" />
					<CardParceiro image="/img/parceiros/sebrae.svg" style="2xl:w-[8rem] 2xl:h-[4rem]" />
				</div>
			</div>
		</div>
	)
}