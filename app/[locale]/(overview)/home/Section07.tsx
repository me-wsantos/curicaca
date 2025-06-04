export function Section07({ id }: any) {
	return (
		<div id={id}
			className="h-auto w-auto flex flex-col justify-start items-start mt-0 bg-black md:w-full md:mt-0 lg:items-start lg:justify-start lg:mt-0 lg:m-0 xl:mt-0"
		>
			<div className="visible z-0 w-screen h-full flex justify-center md:invisible md:h-0">
				<video autoPlay loop muted playsInline className="opacity-90 min-w-full max-w-none object-contain">
					<source
						src="/video/section6-mobile.mp4"
					/>
				</video>
			</div>

			<div className="invisible z-0 w-screen h-0 flex justify-center md:visible lg:mt-0 md:h-auto">
				<video autoPlay loop muted className="opacity-90 min-w-full max-w-none md:object-contain">
					<source
						src="/video/section6.mp4"
					/>
				</video>
			</div>
		</div>
	)
}