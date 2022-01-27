import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import heroRegister from "../public/heroRegister.svg";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function register() {
  const router = useRouter();

  //  State
  const [form, setForm] = useState({
    nik: "",
    nama_lengkap: "",
    email: "",
    password: "",
    alamat: "",
    jenis_kelamin: "",
    no_hp: "",
  });

  // method
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/user/add", form);
      if (response.data.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
              <div>
                <h2 className="text-center text-sm font-bold tracking-wide text-gray-800">
                  Selamat Bergabung di
                  <span className="text-lg font-extrabold tracking-wider text-fuchsia-600"> POJOK UMKM. </span>
                </h2>
              </div>

              <form className="2lg:flex 2lg:gap-x-8" onSubmit={handleSubmit}>
                <div className="w-full py-6">
                  <div className="block text-sm">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>NIK</label>
                    <input
                      onChange={(e) => {
                        setForm({
                          ...form,
                          nik: e.target.value,
                        });
                      }}
                      value={form.nik}
                      type="text"
                      className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                      placeholder="Nomor NIK"
                    />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Nama Lengkap</label>
                    <input
                      onChange={(e) => {
                        setForm({
                          ...form,
                          nama_lengkap: e.target.value,
                        });
                      }}
                      value={form.nama_lengkap}
                      type="text"
                      className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>No HP</label>
                    <input
                      onChange={(e) => {
                        setForm({
                          ...form,
                          no_hp: e.target.value,
                        });
                      }}
                      value={form.no_hp}
                      type="text"
                      className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Alamat Usaha</label>
                    <textarea
                      onChange={(e) => {
                        setForm({
                          ...form,
                          alamat: e.target.value,
                        });
                      }}
                      value={form.alamat}
                      className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                      placeholder="Jl. Raya Mauk No.89, Sepatan, Tangerang, Banten 15520, Indonesia"
                    ></textarea>
                  </div>
                </div>

                <div className="w-full 2lg:py-6">
                  <div className="block text-sm">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Email</label>
                    <input
                      onChange={(e) => {
                        setForm({
                          ...form,
                          email: e.target.value,
                        });
                      }}
                      value={form.email}
                      type="email"
                      className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                      placeholder="pojokumkm@contoh.com"
                    />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Kata Sandi</label>
                    <input
                      onChange={(e) => {
                        setForm({
                          ...form,
                          password: e.target.value,
                        });
                      }}
                      value={form.password}
                      type="password"
                      className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                      placeholder="Kata Sandi"
                    />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Verifikasi Kata Sandi</label>
                    <input
                      type="password"
                      className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                      placeholder="Verifikasi Kata Sandi"
                    />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Jenis Kelamin</label>
                    <select
                      onChange={(e) => {
                        setForm({
                          ...form,
                          jenis_kelamin: e.target.value,
                        });
                      }}
                      value={form.jenis_kelamin}
                      className="form-select mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                    >
                      <option>Pilih Jenis Kelamin</option>
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  </div>
                </div>
                <div className="text-center">
                  <button onClick={handleSubmit} type="submit" className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                    Masuk
                  </button>
                </div>
              </form>
              
              <div>
                <p className="text-center text-xs text-gray-800 mt-6">
                  Sudah punya akun?
                  <Link href="/login">
                    <a className="font-semibold text-fuchsia-600"> Masuk Disini</a>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
