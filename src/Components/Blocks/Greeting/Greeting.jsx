export const Greeting = () => {
  return (
    <div className=" bg-brand-primary1">
      <div className="container m-auto flex flex-col py-6 justify-center items-center">
        <div className="font-serif text-center  text-white">Рады пригласить вас на свою свадьбу!</div>

        <div className="text-center w-[350px] my-[90px]">
          <div className="flex justify-start">
          <h1 className="text-4xl text-brand-textcolor1 font-bold">
                Владислав
              </h1>
            </div>

            <div className="">
              <h1 className="text-4xl text-brand-textcolor1 font-bold">
                &
              </h1>
            </div>

            <div className="flex justify-end">
              <h1 className="text-4xl text-brand-textcolor1 font-bold">
                Екатерина
              </h1>
            </div>
        </div>

        <div className="text-brand-textcolor1">
          29 июля 2023
        </div>
      </div>
    </div>
  )
}