import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import heroLogin from "../public/heroLogin.svg"


export default function login() {
  
  return (
    <>
      <Head>
        <title>Masuk</title>
      </Head>
      <MainLayout>
        <section className="flex min-h-screen font-poppins">
          <div className="flex w-full 2lg:mt-20 flex-col 2lg:gap-10 items-center justify-around 2lg:flex-row">
                <figure className="hidden 2lg:inline-block">
                  <Image src={heroLogin} alt="heroLogin" width={360} height={360} />
                </figure>        

              {/* Form */}
              <div className='px-6 py-4 rounded-md bg-gray-50/80'>
                <div className='m-auto'>
                  <div>
                    <h2 className='text-center text-sm font-bold tracking-wide text-gray-800'>
                      Selamat Datang di Website
                      <span className='text-lg font-extrabold tracking-wider text-fuchsia-600'> POJOK UMKM. </span>
                    </h2>
                  </div>

                  <form>
                    <div className="py-6">
                      <div className="block text-sm">
                        <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Email</label>
                        <input 
                        type="email" className="form-input peer mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm
                        invalid:border-red-500 invalid:text-red-600
                        focus:invalid:border-red-500 focus:invalid:ring-red-500" placeholder="pojokumkm@contoh.com" />
                        <p className="mt-2 hidden peer-invalid:block text-red-600 text-xs">
                          Email tidak valid!
                        </p>
                      </div>
                      <div className="block text-sm mt-5">
                        <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Kata Sandi</label>
                        <input
                        type="password" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm" 
                        placeholder="Kata Sandi" />
                      </div>

                      <div>
                        <p className='text-right text-xs text-gray-800 mt-6'>
                          Lupa Kata Sandi?
                          <Link href="/forgot-password">
                            <a className="font-semibold text-fuchsia-600"> Ubah Disini</a>
                          </Link>
                        </p>
                      </div>

                      {/* Button */}
                      <div className='text-center'>
                        {/* <Link href="/"> */}
                          <button type='submit' onClick={()=>{
                            document.cookie = 'token=123; path=/'
                          }} className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                            Masuk
                          </button>
                        {/* </Link> */}
                      </div>

                      <div>
                        <p className='text-center text-xs text-gray-800 mt-6'>
                          Belum punya akun?
                          <Link href="/register">
                            <a className="font-semibold text-fuchsia-600"> Daftar Disini</a>
                          </Link>
                        </p>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </section>
      </MainLayout>
    </>
  )
}