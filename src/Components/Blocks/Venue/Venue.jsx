export const Venue = () => {
  return (
    <div className=" bg-brand-primary2">
      <div className="container m-auto flex flex-col pt-16 pb-28 justify-center items-center">
        <h2 className="text-4xl font-bold mb-20">Расписание дня</h2>
        <div className="gap-20 justify-center items-center w-full flex flex-col">
          <div className="flex flex-col md:flex-row justify-start items-start mb-12">
            <img className="max-w-[400px] h-auto shadow-xl mr-9" src="/images/zags.jpg" />
            
            <div className="m-auto">
              <p className="mb-4 text-xl text-center">
              <b>Встреча</b> <br /> дата 29 июля 2023 года время 12:45 <br />
              Cквер у ЗАГСа ленинского района <br /> адрес пр. Металлургов, 6
              </p>

              <div className="flex justify-center items-center">
                <a className=" bg-brand-primary1 p-4 border-none rounded-full text-white shadow-xl hover:cursor-pointer hover:opacity-70" href="https://go.2gis.com/z70l7" target="_blank"> Открыть карту </a>
              {/* <button className=" bg-brand-primary1 p-4 border-none rounded-full text-white shadow-xl hover:cursor-pointer hover:opacity-70" type="button"> Открыть карту </button> */}
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-start items-start mb-12">
          <div className="m-auto">
            <p className="mb-4 mr-5 text-xl text-center">
            <b>Торжественная церемония</b> <br />  дата 29 июля 2023 время 13:15 <br />
            ЗАГС Ленинского района <br /> адрес пр. Металлургов, 6
              </p>

              <div className="flex justify-center items-center">
                <a className=" bg-brand-primary1 p-4 border-none rounded-full text-white shadow-xl hover:cursor-pointer hover:opacity-70" href="https://go.2gis.com/z70l7" target="_blank"> Открыть карту </a>
              {/* <button className=" bg-brand-primary1 p-4 border-none rounded-full text-white shadow-xl hover:cursor-pointer hover:opacity-70" type="button"> Открыть карту </button> */}
              </div>
            </div>
            <img className="max-w-[370px] h-auto shadow-xl mt-5 overflow-hidden" src="/images/park.jpg" />
          </div>

          <div className="flex flex-col md:flex-row justify-start items-start">
          <img className="max-w-[400px] h-auto shadow-xl mr-9" src="/images/cafe.jpg" />
            <div className="m-auto">
            <p className="mb-4 text-xl text-center">
            <b>Праздничный банкет</b>   <br />  дата 29 июля 2023 время 15:30 <br />
            место проведения кафе Биография <br /> пр. Ленина, 132/3
              </p>


              <div className="flex justify-center items-center">
                <a className=" bg-brand-primary1 p-4 border-none rounded-full text-white shadow-xl hover:cursor-pointer hover:opacity-70" href="https://go.2gis.com/19uinb" target="_blank"> Открыть карту </a>
              {/* <button className=" bg-brand-primary1 p-4 border-none rounded-full text-white shadow-xl hover:cursor-pointer hover:opacity-70" type="button"> Открыть карту </button> */}
              </div>
            </div>
          </div>



        </div>
      </div>
    </div>
  )
}