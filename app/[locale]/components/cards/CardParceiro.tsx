import Image from 'next/image'

interface IProps {
  main?: boolean;
  image: string
  style?: string
}

export default function CardParceiro({ main, image, style }: IProps) {

  if (main) {
    return (
      <div className={`bg-white mt-0 mb-8 p-4 mx-0 flex justify-center rounded-xl w-[350px] min-h-[150px] md:w-[600px] md:min-h-[200px] lg:w-[450px] lg:h-[150px]`}>
        <div className="flex flex-col justify-center items-center">
          <Image
            src={image}
            width={800}
            height={600}
            alt="logomarcas"
            className={style}
          />
        </div>
      </div>
    )
  }

  return (
    <div className={`bg-white mt-0 mb-8 p-0 mx-0 flex justify-center rounded-xl w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[150px]`}>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={image}
          width={250}
          height={250}
          alt="logomarcas"
          className= { style?.length ? style : "w-[10rem] h-[50px] md:w-[100px] md:h-[100px] xl:w-[5rem] xl:h-[5rem]"}
        />
      </div>
    </div>
  )
}