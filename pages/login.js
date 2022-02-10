import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import heroLogin from "../public/heroLogin.svg";
import baseURL from "../api/baseURL";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function login() {
  const [isLoading, setIsloading] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      setIsloading(true);
      const response = await baseURL.post("/api/user/login", data);
      if (response.data.status === 200) {
        // console.log(doLogin);
        Cookies.set("token", response.data.data.token, { expires: 1 });
        router.push("/");
        setIsloading(false);
      } else {
        toast.error(response.data.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

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
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Head>
        <title>Masuk</title>
      </Head>
      <MainLayout>
        <section className="flex min-h-screen font-poppins justify-center">
          <div className="flex w-full m-auto 2lg:mt-20 flex-col items-center justify-between 2lg:flex-row">
            <figure className="w-full hidden 2lg:inline-block">
              <Image src={heroLogin} alt="heroLogin" width={500} height={500} />
            </figure>

            {/* Form */}
            <div className="md:w-9/12 px-6 py-4 rounded-md bg-gray-50/80">
              <div className="m-auto">
                <div>
                  <h2 className="text-center text-sm font-bold tracking-wide text-gray-800">
                    Selamat Datang di Website
                    <span className="text-lg font-extrabold tracking-wider text-fuchsia-600"> POJOK UMKM. </span>
                  </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="m-auto px-4 py-6">
                    <div className="block text-sm">
                      <label className="px-2 text-gray-800 font-medium">Email</label>
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Masukkan email!",
                          },
                        })}
                        // onChange={(e) => {setForm({...form, email: e.target.value})}}
                        type="email"
                        className="form-input peer mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                        placeholder="pojokumkm@contoh.com"
                      />
                      {errors.email && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="block text-sm mt-5">
                      <label
                        // onChange={(e) => {setForm({...form, password: e.target.value})}}
                        className="px-2 text-gray-800 font-medium"
                      >
                        Kata Sandi
                      </label>
                      <input
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Masukkan password!",
                          },
                        })}
                        type="password"
                        className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                        placeholder="Kata Sandi"
                      />
                      {errors.password && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.password.message}</p>}
                    </div>

                    <div>
                      <p className="text-right text-xs text-gray-800 mt-6">
                        Lupa Kata Sandi?
                        <Link href="/forgot-password">
                          <a className="font-semibold text-fuchsia-600"> Ubah Disini</a>
                        </Link>
                      </p>
                    </div>

                    {/* Button */}
                    <div className="text-center">
                      {/* <Link href="/"> */}
                      <button type="submit" className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                        {isLoading ? "Loading" : "Masuk"}
                      </button>
                      {/* </Link> */}
                    </div>

                    <div>
                      <p className="text-center text-xs text-gray-800 mt-6">
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
  );
}
