export function Section01({ id }: any) {
	return (
		<div id={id}
			className="h-auto w-auto flex flex-col justify-start items-start mt-12 bg-black md:w-full md:mt-0 lg:items-start lg:justify-start lg:m-0"
		>
			
			<div className="visible z-0 w-screen h-full flex justify-center md:invisible md:h-0">
				<video autoPlay loop muted playsInline className="opacity-90 min-w-full max-w-none object-contain">
					<source
						src="/video/section1-mobile.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			
			<div className="invisible z-0 w-screen h-0 flex justify-center md:visible lg:mt-0 md:h-[500px] lg:h-[600px] 2xl:h-[800px]">
				<video autoPlay loop muted className="opacity-90 min-w-full max-w-none md:object-fill">
					<source 
						src="/video/section1.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
		</div>
	)
}
