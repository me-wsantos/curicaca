"use client"

import Marquee from "react-fast-marquee"
import { PoppinsRegular, PoppinsBold, GoodTimes } from '../../fonts'
import { useTranslations } from "next-intl"

export function Section03({ id }: any) {
	const translate = useTranslations("Section03")

	return (
		<>
			<div id={id}
				className="px-3 h-auto w-full flex flex-col items-center 1sm:px-12 xl:mt-8 2xl:mt-0"
			>
				<div className="h-16 w-screen flex justify-start items-center p-0 bg-curicaca-green-1">
					<span className={`${PoppinsBold.className} w-full text-2xl text-white text-center whitespace-nowrap overflow-clip`}>
						<Marquee speed={50}>
							 ${`. ${translate('industria')} . ${translate('sustentabilidade')} . ${translate('inovacao')} . ${translate('industria')} . ${translate('sustentabilidade')} . ${translate('inovacao')} . ${translate('industria')} . ${translate('sustentabilidade')} . ${translate('inovacao')} . ${translate('industria')} . ${translate('sustentabilidade')} . ${translate('inovacao')} . ${translate('industria')} . ${translate('sustentabilidade')} . ${translate('inovacao')}`}
						</Marquee>
					</span>
				</div>

				<div className="w-screen h-auto flex flex-col justify-center items-center px-0 pt-4 lg:flex-row lg:py-8 2xl:pt-8">
					<div className="h-auto w-full flex flex-col justify-center items-start m-0 px-0 2xl:items-end">
						<span className={`${GoodTimes.className} text-3xl w-full text-black text-center md:text-5xl lg:text-start lg:pl-16 2xl:w-3/4`}>
						{translate('sobre')}
						</span>
						<p className={`${PoppinsRegular.className} text-sm w-full text-black mt-4 text-center 1sm:px-8 md:px-20 md:text-lg lg:text-start lg:px-0 lg:pl-16 2xl:w-3/4 2xl:leading-loose`}>
							{translate('p1')}
						</p>
						
						<p className={`${PoppinsRegular.className} text-sm w-full text-black mt-4 text-center 1sm:px-8 md:px-20 md:text-lg lg:text-start lg:px-0 lg:pl-16 2xl:w-3/4 2xl:leading-loose`}>
							{translate('p2')}
						</p>

						<p className={`${PoppinsRegular.className} text-sm w-full text-black mt-4 text-center 1sm:px-8 md:px-20 md:text-lg lg:text-start lg:px-0 lg:pl-16 2xl:w-3/4 2xl:leading-loose`}>
							{translate('p3')}
						</p>
					</div>
					<div className="h-56 w-screen flex justify-center items-center bg-[url('/img/sec3.png')] bg-no-repeat bg-center bg-18 m-0 md:bg-25 xl:min-h-[40rem] 2xl:bg-45">
					</div>
				</div>

				<div className="h-16 w-screen flex justify-center items-center m-0 bg-curicaca-green-1">
					<Marquee speed={50}>
						<div className={`${PoppinsBold.className} text-sm w-screen h-10 text-white mx-0 text-center bg-[url('/img/curicaca-line.png')] bg-18 bg-repeat-round md:text-lg`}>
						</div>
					</Marquee>
				</div>
			</div>
		</>
	)
}