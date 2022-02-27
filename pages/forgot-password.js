import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import baseUrl from "../api/baseURL";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
// import register from "./register";

export default function forgotPassword() {
  const [isLoading, setIsloading] = useState(false);
  const [email, setEmail] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const forgetPassword = async (e) => {
    // e.preventDefault();
    try {
      setIsloading(true);
      const response = await baseUrl.put("/api/user/forget", { email });
      if (response.data.status === 200) {
        toast.success(response.data.data, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
      <MainLayout>
        <section className="flex m-auto py-10 2lg:py-0 min-h-screen font-poppins">
          <div className="flex w-full 2lg:mt-20">
            <div className="m-auto bg-gray-50/70 p-6 rounded-md">
              <div>
                <h2 className="text-center text-sm font-bold tracking-wide text-gray-800">
                  Selamat Datang di Website
                  <span className="text-lg font-extrabold tracking-wider text-fuchsia-600">
                    {" "}
                    POJOK UMKM.{" "}
                  </span>
                </h2>
              </div>

              <form onSubmit={handleSubmit(forgetPassword)}>
                <div className="py-6">
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      className="form-input mt-1 block w-full text-sm border-none rounded-md shadow"
                      placeholder="pojokumkm@contoh.com"
                    />
                    {errors.email && (
                      <p className="px-2 pt-1 text-xs font-medium text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-52 h-8 mt-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50"
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
                        "Kirim Verifikasi"
                      )}
                    </button>
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
          </div>
        </section>
      </MainLayout>
    </>
  );
}
