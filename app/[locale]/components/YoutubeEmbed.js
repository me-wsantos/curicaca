export function VideoTvCuricaca({ embedId }) {
  return (
    <iframe
      className="p-3 rounded-3xl h-[15rem] 1sm:h-[20rem] 1sm:w-[100%] md:h-[25rem] xl:p-0 xl:h-[25rem] 2xl:w-[45rem] border border-gray-800 shadow-xl shadow-red-300/40" 
      src={`https://www.youtube.com/embed/${embedId}`}
      allowFullScreen
    />
  )
}