import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import heroLogin from "../public/heroLogin.svg"
import baseURL from "../api/baseURL";
import Cookies from "js-cookie"
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";

export default function login() {
  const router = useRouter()
  const {register, handleSubmit, formState:{errors}} = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      const doLogin = await baseURL.post("/api/user/login", data);
      if (doLogin.data.status === 200){
        // console.log(doLogin);
        Cookies.set('token', doLogin.data.data.token, {expires:1})
        router.push('/')
      }
    } catch (error) {
      console.log(error);
    }
  }


  // const loginHandler = async (e) => {
  //   e.preventDefault()
  //   try {
  //     const doLogin = await baseURL.post("/api/user/login",form);
  //     console.log(doLogin);
  //     if (doLogin.data.status === 200){
  //       Cookies.set('token', doLogin.data.token, {expires:1})
  //       router.push('/')
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  
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

                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="py-6">
                      <div className="block text-sm">
                        <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Email</label>
                        <input
                        {...register('email', {
                          required:{
                            value:true,
                          }
                        })}
                        // onChange={(e) => {setForm({...form, email: e.target.value})}}
                        type="email" className="form-input peer mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm" placeholder="pojokumkm@contoh.com"/>
                      </div>
                      <div className="block text-sm mt-5">
                        <label
                        // onChange={(e) => {setForm({...form, password: e.target.value})}}
                        className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Kata Sandi</label>
                        <input
                        {...register('password', {
                          required:{
                            value:true,
                          }
                        })}
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
                          <button type='submit' className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
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