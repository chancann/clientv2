import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import heroRegister from "../public/heroRegister.svg"

export default function register() {
  return (
    <>
      <MainLayout>
        <section className="flex py-2 min-h-screen font-poppins">
          <div className="w-full flex mt-20 flex-col items-center 2lg:flex-row">
            <figure className="hidden 2lg:inline-block">
              <Image src={heroRegister} alt="heroRegister" width={650} height={650} />
            </figure>

            {/* Form */}
            <div className='w-full mx-auto px-6 py-4 rounded-md bg-gray-50/80'>
              <div>
                <h2 className='text-center text-sm font-bold tracking-wide text-gray-800'>
                  Selamat Bergabung di
                  <span className='text-lg font-extrabold tracking-wider text-fuchsia-600'> POJOK UMKM. </span>
                </h2>
              </div>

              <form className="2lg:flex 2lg:gap-x-8">
                <div className="w-full py-6">
                  <div className="block text-sm">
                    <label className="text-gray-800 font-medium">NIK</label>
                    <input type="text" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm
                        focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50" placeholder="Nomor NIK" />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium">Nama Lengkap</label>
                    <input type="text" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm
                        focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50" placeholder="Nama Lengkap" />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium">No HP</label>
                    <input type="text" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm
                        focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50" placeholder="08xxxxxxxxxx" />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium">Alamat Usaha</label>
                    <textarea className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm
                        focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50" placeholder="Jl. Raya Mauk No.89, Sepatan, Tangerang, Banten 15520, Indonesia">
                        </textarea>
                  </div>
                </div>

                <div className="w-full 2lg:py-6">
                  <div className="block text-sm">
                    <label className="text-gray-800 font-medium">Email</label>
                    <input type="email" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm
                        focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50" placeholder="pojokumkm@contoh.com" />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium">Kata Sandi</label>
                    <input type="password" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm
                        focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50" placeholder="Kata Sandi" />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium">Verifikasi Kata Sandi</label>
                    <input type="password" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm
                        focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50" placeholder="Verifikasi Kata Sandi" />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium">Jenis Kelamin</label>
                    <select className="form-select mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm
                        focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50">
                      <option>Pilih Jenis Kelamin</option>
                      <option>Laki-laki</option>
                      <option>Perempuan</option>
                    </select>
                  </div>

                </div>
              </form>
              {/* Button */}
              <div className='text-center'>
                <Link href="/">
                  <button type='submit' className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                    Masuk
                  </button>
                </Link>
              </div>
              <div>
                <p className='text-center text-xs text-gray-800 mt-6'>
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
  )
}
