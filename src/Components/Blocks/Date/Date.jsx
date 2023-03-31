export const Date = () => {
  return (
    <div className="container m-auto flex flex-col pt-20 pb-32 justify-center items-center">

        <img src="/images/self.jpg" className="w-[250px] rounded-full mb-12" />
        <h2 className="text-2xl font-bold ">Дорогие гости!</h2>
        <p className="text-center">Мы создаем семью и приглашаем вас разделить с<br /> нами этот счастливый день!</p>
        <h2 className="mt-10 font-bold text-2xl">Дата проведения</h2>
        <div className="flex gap-4 items-center">
          <div className="border-t border-b px-5 border-black text-4xl">Июль</div>

          <div className="flex flex-col justify-center items-center">
            <p>Суббота</p>
            <p className="text-4xl">29</p>
            <p>2023</p>
          </div>

          <div className="border-t border-b px-5 border-black text-4xl">В 14.00</div>
        </div>
      
    </div>
  )
}