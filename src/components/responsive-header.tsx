import { useState } from "react"

export const HeaderMobile = () => {
  const [hiddenMenu, setHiddenMenu] = useState(false)
  return (
    <nav className="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-green-400
        ">
      <div>
        <img className="h-12 w-12" src="/logo.png" alt="" />
      </div>
      <svg onClick={() => setHiddenMenu(prevState => !prevState)} xmlns="<http://www.w3.org/2000/svg>" id="menu-button" className="h-6 w-6 cursor-pointer md:hidden block text-white" fill="none"
        viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <div className={`w-full md:flex md:items-center md:w-auto mt-4 border-t-2 ${!hiddenMenu ? 'hidden' : ''}`} id="menu">
        <ul className="
                    text-base text-gray-700
                    pt-4
                    md:flex
                    md:justify-between
                    md:pt-0">
          <li>
            <a className="md:p-4 py-2 block text-white duration-300 hover:underline hover:text-rose-400 hover:scale-105" href="#">Sobre</a>
          </li>
          <li>
            <a className="md:p-4 py-2 block text-white duration-300 hover:underline hover:text-rose-400 hover:scale-105" href="#">Novidades</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}