import { kineticBold } from "../../fonts"
import SliderTrilhaConhecimentoExtended from "../../components/SliderTrilhaConhecimentoExtended"
import SliderTrilhaConhecimento from "../../components/SliderTrilhaConhecimento"
import { useTranslations } from "next-intl"

export function Section06({ id }: any) {
	const translate = useTranslations("Section06")

	return (
		<div id={id}
			className="px-3 w-screen bg-[url('/img/bg_trilhas.png')] bg-trilhas h-[500px] pt-8 p-4 flex flex-col items-center md:h-[600px] lg:h-auto lg:p-0"
		>
			<div className="w-full text-2xl leading-normal font-bold text-center flex justify-center items-center0 lg:mt-8 lg:py-8 xl:max-w-7xl xl:py-12 2xl:py-20">
				<h2 className={`${kineticBold.className} w-full text-[1.7rem] text-curicaca-green-1 font-bold text-center mb-3 mt-5 tracking-wider md:text-curicaca-orange md:text-5xl 2xl:text-6xl`}>
					{translate('titulo')}
				</h2>
			</div>
	
			<div className="2xl:mx-8 lg:w-[90%] flex">
				<SliderTrilhaConhecimentoExtended />
			</div>

			<SliderTrilhaConhecimento />
		</div >
	)
}