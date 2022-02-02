import Link from "next/link"
import { atom, useRecoilValue } from 'recoil'
import { useState } from "react"
import { useEffect } from "react"
import Cookie from 'js-cookie'
import decode from 'jwt-decode'

export default function Header() {
  const [user , setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  // methods
  const logoutHandler = () => {
    Cookie.remove('token')
    setIsLoggedIn(false)
  }

  useEffect(() => {
    const token = Cookie.get('token')
    if (token) {
      const userData = decode(token)
      setUser(userData)
      setIsLoggedIn(true)
    }
  }, []);
  

  return (
    <header className='w-full py-6 fixed top-0 z-10 bg-white/95 border-b shadow-sm'>
      <section className='flex w-5/6 mx-auto flex-col gap-10 font-poppins md:flex-row md:items-center'>

        {/* Logo & Hamburger */}
        <div className='flex justify-between'>
          <div className="w-20 leading-3">
            <Link href='/'>
              <a className="font-extrabold text-fuchsia-600 tracking-wider">
                POJOK UMKM.
              </a>
            </Link>
          </div>

          <div>
            <button onClick={() => { setIsOpen(!isOpen) }} className='focus:outline-none block md:hidden text-fuchsia-600'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className={!isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                <path className={isOpen ? 'block' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* Logo & Hamburger */}

        {/* Nav & Button */}
        <nav className={`${isOpen ? 'block' : 'hidden'} w-full md:flex flex-col md:flex-row md:items-center justify-between text-center`}>
          <div className='flex flex-col text-sm text-gray-800 font-medium gap-6 md:flex-row'>
            <Link href="/">
              <a className="hover:text-fuchsia-500">Beranda</a>
            </Link>
            <Link href="/product">
              <a className="hover:text-fuchsia-500">Produk</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-fuchsia-500">Tentang</a>
            </Link>
          </div>

          {isLoggedIn ?
            <div className='flex sm-tablet:flex-row flex-col items-center border-t sm-tablet:border-t-0'>
              <Link className="cursor-pointer" href={`/user/${user._id}`}>
                <div className='flex mt-4 sm-tablet:mt-0 items-center'>
                  <figure className=' flexborder'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </figure>
                  <div className='mx-2 text-sm'>
                    {user ? user.nama : ''}
                  </div>
                </div>
              </Link>
              <div>
                  <button onClick={logoutHandler} type='button' className={`w-48 sm-tablet:w-28 mt-4 sm-tablet:mt-0 p-2 font-medium text-sm text-white-1 bg-purple-1 border rounded hover:text-purple-2`}>
                    Keluar
                  </button>
              </div>
            </div>
            :
            <div className="mt-6 md:mt-0">
              <Link href='/login'>
                <button className="w-24 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                  Masuk
                </button>
              </Link>
            </div>
          }
        </nav>
        {/* Navbar & Button */}

      </section>
    </header >
  )
}
