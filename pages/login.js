import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import heroLogin from "../public/heroLogin.svg";
import baseURL from "../api/baseURL";
import Cookies from "js-cookie";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function login() {
  const [isLoading, setIsloading] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setIsloading(true);
      const response = await baseURL.post("/api/user/login", data);
      if (response.data.status === 200) {
        // console.log(doLogin);
        if (response.data.data.is_verified) {
          Cookies.set("token", response.data.data.token, { expires: 1 });
          router.push("/");
          setIsloading(false);
        } else {
          // user not verified yet
          toast.error("Maaf anda belum terverifikasi!", {
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
      } else {
        toast.error("Tidak Valid!", {
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

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Head>
        <title>Masuk</title>
      </Head>
      <MainLayout>
        <section className="flex min-h-screen font-poppins justify-center">
          <div className="flex w-full m-auto 2lg:mt-20 flex-col items-center justify-between 2lg:flex-row">
            <motion.figure
              animate={{ x: [-100, 0] }}
              className="w-full hidden 2lg:inline-block"
            >
              <Image src={heroLogin} alt="heroLogin" width={500} height={500} />
            </motion.figure>

            {/* Form */}
            <motion.div
              animate={{ x: [100, 0] }}
              className="md:w-9/12 px-6 py-4 rounded-md bg-gray-50/70"
            >
              <div className="m-auto">
                <div>
                  <h2 className="text-center text-sm font-bold tracking-wide text-gray-800">
                    Selamat Datang di Website
                    <span className="text-lg font-extrabold tracking-wider text-fuchsia-600">
                      {" "}
                      POJOK UMKM.{" "}
                    </span>
                  </h2>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="m-auto px-4 py-6">
                    <div className="block text-sm">
                      <label className="px-2 text-gray-800 font-medium">
                        Email
                      </label>
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Masukkan email!",
                          },
                        })}
                        // onChange={(e) => {setForm({...form, email: e.target.value})}}
                        type="email"
                        className="form-input peer mt-1 block w-full text-sm rounded-md border-none shadow"
                        placeholder="pojokumkm@contoh.com"
                      />
                      {errors.email && (
                        <p className="px-2 pt-1 text-xs font-medium text-red-500">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div className="relative text-sm mt-5">
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
                        type={isPasswordShow ? "text" : "password"}
                        className="form-input mt-1 block w-full text-sm rounded-md border-none shadow"
                        placeholder="Kata Sandi"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          setIsPasswordShow(!isPasswordShow);
                        }}
                        className="absolute h-4 w-4 cursor-pointer inset-y-0 right-0 flex items-center text-sm leading-5 mt-[34px] mr-3"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          className={!isPasswordShow ? "block" : "hidden"}
                          fillRule="evenodd"
                          d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                          clipRule="evenodd"
                        />
                        <path
                          className={!isPasswordShow ? "block" : "hidden"}
                          d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                        />
                        <path
                          className={isPasswordShow ? "block" : "hidden"}
                          d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                        />
                        <path
                          className={isPasswordShow ? "block" : "hidden"}
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {errors.password && (
                        <p className="px-2 pt-1 text-xs font-medium text-red-500">
                          {errors.password.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <p className="text-right text-xs text-gray-800 mt-6">
                        Lupa Kata Sandi?
                        <Link href="/forgot-password">
                          <a className="font-semibold text-fuchsia-600">
                            {" "}
                            Ubah Disini
                          </a>
                        </Link>
                      </p>
                    </div>

                    {/* Button */}
                    <div className="text-center">
                      {/* <Link href="/"> */}
                      <button
                        type="submit"
                        className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50"
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center space-x-2">
                            <div
                              className="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full"
                              role="status"
                            ></div>
                            <span className="">Tunggu...</span>
                          </div>
                        ) : (
                          "Masuk"
                        )}
                      </button>
                      {/* </Link> */}
                    </div>
                    <div>
                      <p className="text-center text-xs text-gray-800 mt-6">
                        Belum punya akun?
                        <Link href="/register">
                          <a className="font-semibold text-fuchsia-600">
                            {" "}
                            Daftar Disini
                          </a>
                        </Link>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
