import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import heroRegister from "../public/heroRegister.svg";
import baseURL from "../api/baseURL";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export default function register() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // e.preventDefault();
    try {
      const registerRes = await baseURL.post("/api/user/add", data);
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
          router.push("/");
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
            <div className="w-full mx-auto px-6 py-4 rounded-md bg-gray-50/80">
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
                      <label className="text-gray-800 font-medium">
                        <span className="text-red-500">&nbsp;*</span>NIK
                      </label>
                      <input
                        {...register("nik", {
                          required: {
                            value: true,
                            message: "Masukkan NIK!",
                          },
                          pattern: {
                            value: /^-?[0-9]\d*\.?\d*$/,
                            message: "Tidak boleh huruf, Masukkan angka!",
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
                        className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                        placeholder="Nomor NIK"
                      />
                      {errors.nik && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.nik.message}</p>}
                    </div>
                    <div className="block text-sm mt-5">
                      <label className="text-gray-800 font-medium">
                        <span className="text-red-500">&nbsp;*</span>Nama Lengkap
                      </label>
                      <input
                        {...register("nama_lengkap", {
                          required: {
                            value: true,
                            message: "Masukkan nama lengkap!",
                          },
                          minLength: {
                            value: 3,
                            message: "Nama anda tidak lengkap!",
                          },
                          maxLength: {
                            value: 30,
                            message: "Maksimal 30 huruf!",
                          },
                        })}
                        type="text"
                        className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                        placeholder="Nama Lengkap"
                      />
                      {errors.nama_lengkap && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.nama_lengkap.message}</p>}
                    </div>
                    <div className="block text-sm mt-5">
                      <label className="text-gray-800 font-medium">
                        <span className="text-red-500">&nbsp;*</span>No HP
                      </label>
                      <input
                        {...register("no_hp", {
                          required: {
                            value: true,
                            message: "Masukkan nomor HP!",
                          },
                          pattern: {
                            value: /^-?[0-9]\d*\.?\d*$/,
                            message: "Tidak boleh huruf, Masukkan angka!",
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
                        className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                        placeholder="08xxxxxxxxxx"
                      />
                      {errors.no_hp && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.no_hp.message}</p>}
                    </div>
                  </div>

                  <div className="w-full 2lg:py-6">
                    <div className="block text-sm">
                      <label className="text-gray-800 font-medium">
                        <span className="text-red-500">&nbsp;*</span>Email
                      </label>
                      <input
                        {...register("email", {
                          required: {
                            message: "Masukkan email!",
                          },
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Email tidak Valid!",
                          },
                        })}
                        type="email"
                        className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                        placeholder="pojokumkm@contoh.com"
                      />
                      {errors.email && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.email.message}</p>}
                    </div>
                    <div className="block text-sm mt-5">
                      <label className="text-gray-800 font-medium">
                        <span className="text-red-500">&nbsp;*</span>Kata Sandi
                      </label>
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
                        type="password"
                        className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                        placeholder="Kata Sandi"
                      />
                      {errors.password && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.password.message}</p>}
                    </div>
                    <div className="block text-sm mt-5">
                      <label className="text-gray-800 font-medium">
                        <span className="text-red-500">&nbsp;*</span>Jenis Kelamin
                      </label>
                      <select
                        {...register("jenis_kelamin", {
                          required: {
                            value: true,
                            message: "Pilih jenis kelamin!",
                          },
                        })}
                        className="form-select mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                      >
                        <option value="Pilih Jenis Kelamin">Pilih Jenis Kelamin</option>
                        <option value="Laki-laki">Laki-laki</option>
                        <option value="Perempuan">Perempuan</option>
                      </select>
                      {errors.jenis_kelamin && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.jenis_kelamin.message}</p>}
                    </div>
                  </div>
                </div>
                <div className="block text-sm mt-5 2lg:mt-0">
                  <label className="text-gray-800 font-medium">
                    <span className="text-red-500">&nbsp;*</span>Alamat Usaha
                  </label>
                  <textarea
                    {...register("alamat", {
                      required: {
                        value: true,
                        message: "Masukkan alamat!",
                      },
                    })}
                    className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                    placeholder="Jl. Raya Mauk No.89, Sepatan, Tangerang, Banten 15520, Indonesia"
                  ></textarea>
                  {errors.alamat && <p className="px-2 pt-1 text-xs font-medium text-red-500">{errors.alamat.message}</p>}
                </div>
                <div className="text-center">
                  <button type="submit" className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                    Daftar
                  </button>
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
