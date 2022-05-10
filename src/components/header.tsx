export const Header = () => {
  return (
    <div className="flex justify-between items-center h-18 bg-green-400 p-4">
      {/* <p className="text-2xl font-bold text-white">LOGO.</p> */}
      <img className="h-12 w-12" src="/logo.png" alt="" />
    <div className="flex gap-4">
      <p className="text-md text-white duration-300 hover:underline hover:text-rose-400 hover:scale-110">
        Sobre
      </p>
      <p className="text-md text-white duration-300 hover:underline hover:text-rose-400 hover:scale-110">
        Novidades
      </p>
    </div>
  </div>
  )
}