export default function ResponsiveSizes() {
  return (
    <div className="flex h-3 z-10" >
      <span className='text-black visible 1sm:invisible'>sm</span>
      <span className='text-black invisible 1sm:visible md:invisible'>1sm</span>
      <span className='text-black invisible md:visible lg:invisible'>md</span>
      <span className='text-black invisible lg:visible xl:invisible'>lg</span>
      <span className='text-black invisible xl:visible 2xl:invisible'>xl</span>
      <span className='text-black invisible 2xl:visible 3xl:invisible'>2xl</span>
      <span className='text-black invisible 3xl:visible'>3xl</span>
    </div>
  )
}