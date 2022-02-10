import Link from "next/link";
import { atom, useRecoilValue } from "recoil";
import { useState } from "react";
import { useEffect } from "react";
import Cookie from "js-cookie";
import decode from "jwt-decode";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Header() {
  const router = useRouter();
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // methods
  const logoutHandler = () => {
    Cookie.remove("token");
    toast.success("Berhasil keluar!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    router.push("/login");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      const userData = decode(token);
      setUser(userData);
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <header className="w-full py-6 fixed top-0 z-10 bg-white/95 border-b shadow-sm">
      <section className="flex w-5/6 mx-auto flex-col gap-10 font-poppins md:flex-row md:items-center">
        {/* Logo & Hamburger */}
        <div className="flex justify-between">
          <div className="w-20 leading-3">
            <Link href="/">
              <a className="font-extrabold text-fuchsia-600 tracking-wider">POJOK UMKM.</a>
            </Link>
          </div>

          <div>
            <button
              onClick={() => {
                setIsOpen(!isOpen);
              }}
              className="focus:outline-none block md:hidden text-fuchsia-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path className={!isOpen ? "block" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16m-7 6h7" />
                <path className={isOpen ? "block" : "hidden"} strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        {/* Logo & Hamburger */}

        {/* Nav & Button */}
        <nav className={`${isOpen ? "block" : "hidden"} w-full md:flex flex-col md:flex-row md:items-center justify-between text-center`}>
          <div className="flex flex-col text-sm text-gray-800 font-medium gap-6 md:flex-row">
            <Link href="/">
              <a className="hover:text-fuchsia-500">Beranda</a>
            </Link>
            <Link href="/product">
              <a className="hover:text-fuchsia-500">Produk</a>
            </Link>
            <Link href="/about">
              <a className="hover:text-fuchsia-500 mb-2">Tentang</a>
            </Link>
          </div>

          {isLoggedIn ? (
            <div className="flex md:flex-row flex-col items-center border-t md:border-t-0 md:gap-2">
              <Link href={`/user/${user._id}`}>
                <button className="flex mt-4 md:mt-0 items-center hover:text-fuchsia-500">
                  <figure className="">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                    </svg>
                  </figure>
                  <div className="mx-1 text-xs tracking-tight">{user ? user.nama : ""}</div>
                </button>
              </Link>
              <div>
                <button onClick={logoutHandler} type="button" className={`w-24 h-8 mt-4 md:mt-0 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50`}>
                  Keluar
                </button>
                <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
              </div>
            </div>
          ) : (
            <div className="mt-6 md:mt-0">
              <Link href="/login">
                <button className="w-24 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">Masuk</button>
              </Link>
            </div>
          )}
        </nav>
        {/* Navbar & Button */}
      </section>
    </header>
  );
}
