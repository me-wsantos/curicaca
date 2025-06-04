import Image from "next/image"
import { useLocale } from "next-intl"

export function Section02({ id }: any) {
	const locale = useLocale()

	return (
		<>
			<div id={id}
				className="px-0 mx-auto py-2 h-auto flex flex-col justify-center w-100 bg-curicaca-blue-2 lg:h-[350px] xl:mt-8 2xl:h-[500px] 2xl:mt-7"
			>
				<div
					className="w-screen h-full flex justify-center items-center"
				>
					<Image
						src={`${locale === "pt" ? '/img/background-sec2.png' : (locale === "en" ? '/img/background-sec2-eng.png': '/img/background-sec2-esp.png')}`}
						height={250}
						width={250}
						layout="responsive"
						alt="background"
						className="border-none"
					/>
				</div>
			</div>
		</>
	)
}