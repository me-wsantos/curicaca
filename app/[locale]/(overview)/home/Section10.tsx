import { kineticBold } from "../../fonts"
import { SliderProgramacaoExtend } from "../../components/sliderProgramacao/SliderProgramacaoExtend"
import ProgramacaoSlider from "../../components/sliderProgramacao/ProgramacaoSlider"
import { useTranslations } from "next-intl"

export function Section10({ id }: any) {
	const translate = useTranslations("Section10")

	return (
		<div id={id}
			className="px-3 w-screen bg-curicaca-blue-1 h-auto pt-8 p-4 flex flex-col items-center md:h-[800px] md:bg-[url('/img/bg-programacao.png')] md:bg-cover md:bg-no-repeat lg:h-auto lg:p-0"
		>
			<div className="w-full text-2xl leading-normal font-bold text-center flex flex-col justify-center items-center lg:mt-0 lg:py-8 xl:max-w-7xl xl:py-0">
				<h2 className={`${kineticBold.className} w-full text-[1.3rem] text-white font-bold text-center mb-3 mt-5 tracking-wider lg:mb-0 md:text-2xl 2xl:text-5xl`}>
					{translate('titulo')}
				</h2>
				<h4 className="text-base mt-4 text-white lg:text-2xl">
					{translate('subtitulo')}
				</h4>
			</div>

			<div className="w-screen lg:w-full h-auto">
				<div className="flex w-full h-[8rem] justify-between items-end overflow-clip px-0 py-0 mt-12 md:h-[12rem] lg:mt-6 lg:h-[16rem] xl:h-[20rem]">
					<div className="flex w-full h-full bg-[url('/img/banner-programacao.png')] bg-contain bg-no-repeat justify-between items-end overflow-clip py-0 mt-6 lg:bg-cover">
					</div>
				</div>
			</div>

			<div className="lg:mt-0 lg:w-[90%] 2xl:w-[80%] flex 2xl:left-[-3rem] 2xl:h-auto 2xl:mb-6">
				<SliderProgramacaoExtend />
			</div>
			<ProgramacaoSlider />
		</div >
	)
}