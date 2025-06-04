import { kineticBold, PoppinsBold } from "../../fonts"
import { SliderProgramacaoExtend } from "../../components/sliderProgramacao/SliderProgramacaoExtend"
import ProgramacaoSlider from "../../components/sliderProgramacao/ProgramacaoSlider"
import { useTranslations } from "next-intl"
import { VideoTvCuricaca } from "../../components/YoutubeEmbed"

export function Section11({ id }: any) {
	const translate = useTranslations("Section11")

	return (
		<div id={id}
			className="px-3 w-screen h-[600px] bg-black  pt-8 p-4 flex flex-col items-center md:h-[800px] 2xl:md:h-[800px]"
		>
			<div className="w-full text-2xl leading-normal font-bold text-center flex flex-col justify-center items-center md:mt-20 xl:max-w-7xl xl:py-0">
				<h2 className={`${kineticBold.className} w-full text-[1.5rem] text-white font-bold text-center mb-3 mt-5 tracking-wider md:text-[2rem] md:text-2xl 2xl:text-5xl`}>
					{translate('titulo')}
				</h2>
			</div>

			<div className="w-screen lg:w-full h-auto mt-6 flex justify-center md:mt-20 xl:h-[800px]">
				<VideoTvCuricaca embedId="tZi7nkLiANo?si=SgEz-ADIcV5mvvpR" />
			</div>

		</div >
	)
}