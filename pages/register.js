import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import heroRegister from "../public/heroRegister.svg";
import baseURL from "../api/baseURL";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

export default function register() {
  const router = useRouter();
  const [isPasswordShow, setIsPasswordShow] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    // e.preventDefault();
    try {
      const registerRes = await baseURL.post("/api/user/add", { ...data, no_hp: parseInt(`${62}${data.no_hp.slice(1)}`) });
      // console.log(response);
      if (registerRes.data.status === 200) {
        const userData = {
          email: data.email,
          password: data.password,
        };
        // router.push("/");
        const doLogin = await baseURL.post("/api/user/login", userData);
        // console.log(doLogin);
        if (doLogin.data.status === 200) {
          Cookies.set("token", doLogin.data.data.token, { expires: 1 });
          toast.success("Selamat bergabung!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          router.push("/");
        } else {
          toast.error("Tidak valid!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  //  State
  // const [form, setForm] = useState({
  //   nik: "",
  //   nama_lengkap: "",
  //   email: "",
  //   password: "",
  //   alamat: "",
  //   jenis_kelamin: "",
  //   no_hp: "",
  // });

  return (
    <>
      <MainLayout>
        <section className="flex py-2 min-h-screen font-poppins">
          <div className="w-full flex mt-20 flex-col items-center 2lg:flex-row">
            <figure className="hidden 2lg:inline-block">
              <Image src={heroRegister} alt="heroRegister" width={650} height={650} />
            </figure>

            {/* Form */}
            <div className="w-full mx-auto px-6 py-4 rounded-md bg-gray-50/70">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <h2 className="text-center text-sm font-bold tracking-wide text-gray-800">
                    Selamat Bergabung di
                    <span className="text-lg font-extrabold tracking-wider text-fuchsia-600"> POJOK UMKM. </span>
                  </h2>
                </div>

                <div className="2lg:flex 2lg:gap-x-8">
                  <div className="w-full py-6">
                    <div className="block text-sm">
                      <label className="px-2 text-gray-800 font-medium">NIK</label>
                      <input
                        {...register("nik", {
                          required: {
                            value: true,
                            message: "Masukkan NIK!",
                          },
                          pattern: {
                            value: /^-?[0-9]\d*\.?\d*$/,
                            message: "Tidak valid, Masukkan angka!",
                          },
                          minLength: {
                            value: 16,
                            message: "NIK anda kurang lengkap!",
                          },
                          maxLength: {
                            value: 16,
                            message: "Maksimal 16 digit!",
                          },
                        })}
                        type="text"
                        className="form-input mt-1 block w-full text-sm rounded-md border-none shadow"
                        placeholder="Nomor NIK"
                      />
                      {errors.nik && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.nik.message}</p>}
                    </div>
                    <div className="block text-sm mt-5">
                      <label className="px-2 text-gray-800 font-medium">Nama Lengkap</label>
                      <input
                        {...register("nama_lengkap", {
                          required: {
                            value: true,
                            message: "Masukkan nama lengkap!",
                          },
                          minLength: {
                            value: 3,
                            message: "Tidak valid!",
                          },
                          maxLength: {
                            value: 30,
                            message: "Maksimal 30 huruf!",
                          },
                        })}
                        type="text"
                        className="form-input mt-1 block w-full text-sm rounded-md border-none shadow"
                        placeholder="Nama Lengkap"
                      />
                      {errors.nama_lengkap && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.nama_lengkap.message}</p>}
                    </div>
                    <div className="block text-sm mt-5">
                      <label className="px-2 text-gray-800 font-medium">No HP</label>
                      <input
                        {...register("no_hp", {
                          required: {
                            value: true,
                            message: "Masukkan nomor HP!",
                          },
                          pattern: {
                            value: /^-?[0-9]\d*\.?\d*$/,
                            message: "Tidak valid, Masukkan angka!",
                          },
                          minLength: {
                            value: 10,
                            message: "Nomor HP anda kurang lengkap!",
                          },
                          maxLength: {
                            value: 15,
                            message: "Maksimal 15 digit!",
                          },
                        })}
                        type="text"
                        className="form-input mt-1 block w-full text-sm rounded-md border-none shadow"
                        placeholder="08xxxxxxxxxx"
                      />
                      {errors.no_hp && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.no_hp.message}</p>}
                    </div>
                  </div>

                  <div className="w-full 2lg:py-6">
                    <div className="block text-sm">
                      <label className="px-2 text-gray-800 font-medium">Email</label>
                      <input
                        {...register("email", {
                          required: {
                            value: true,
                            message: "Masukkan email!",
                          },
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email tidak Valid!",
                          },
                        })}
                        type="email"
                        className="form-input mt-1 block w-full text-sm rounded-md border-none shadow"
                        placeholder="pojokumkm@contoh.com"
                      />
                      {errors.email && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="relative text-sm mt-5">
                      <label className="px-2 text-gray-800 font-medium">Kata Sandi</label>
                      <input
                        {...register("password", {
                          required: {
                            value: true,
                            message: "Masukkan kata sandi!",
                          },
                          minLength: {
                            value: 8,
                            message: "Kata sandi anda kurang spesifik!",
                          },
                        })}
                        type={isPasswordShow?"text":"password"}
                        className="form-input mt-1 block w-full text-sm rounded-md border-none shadow"
                        placeholder="Kata Sandi"
                      />
                      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {setIsPasswordShow(!isPasswordShow);}} className="absolute h-4 w-4 cursor-pointer inset-y-0 right-0 flex items-center text-sm leading-5 mt-[34px] mr-3" viewBox="0 0 20 20" fill="currentColor">
                          <path className={!isPasswordShow ? "block" : "hidden"} fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                          <path className={!isPasswordShow ? "block" : "hidden"} d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                          <path className={isPasswordShow ? "block" : "hidden"} d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path className={isPasswordShow ? "block" : "hidden"} fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      {errors.password && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.password.message}</p>}
                    </div>
                    <div className="block text-sm mt-5">
                      <label className="px-2 text-gray-800 font-medium">Jenis Kelamin</label>
                      <select
                        {...register("jenis_kelamin", {
                          required: {
                            value: true,
                            message: "Pilih jenis kelamin!",
                          },
                        })}
                        className="form-select mt-1 block w-full text-sm rounded-md border-none shadow"
                      >
                        <option value="">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                      {errors.jenis_kelamin && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.jenis_kelamin.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="block text-sm mt-5 2lg:mt-0">
                  <label className="px-2 text-gray-800 font-medium">Alamat Usaha</label>
                  <textarea
                    {...register("alamat", {
                      required: {
                        value: true,
                        message: "Masukkan alamat!",
                      },
                    })}
                    className="form-input mt-1 block w-full text-sm rounded-md border-none shadow"
                    placeholder="Jl. Raya Mauk No.89, Sepatan, Tangerang, Banten 15520, Indonesia"
                  ></textarea>
                  {errors.alamat && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.alamat.message}</p>}
                </div>
                <div className="flex items-center mt-5">
                  <input
                  {...register('agreement',{
                    required:{
                      value:true
                    }
                  })}
                  id="agreement" type="checkbox" className="form-checkbox h-4 w-4 border-gray-50 rounded cursor-pointer shadow"/>
                  <label for="agreement" className="ml-3 block text-xs text-gray-800 select-none cursor-pointer">Saya menyatakan bahwa data yang diisikan adalah benar.</label>
                </div>
                <div className="text-center">
                  <button type="submit" className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                    Daftar
                  </button>
                  <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
                </div>

                <div>
                  <p className="text-center text-xs text-gray-800 mt-6">
                    Sudah punya akun?
                    <Link href="/login">
                      <a className="font-semibold text-fuchsia-600"> Masuk Disini</a>
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
