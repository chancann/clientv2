import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function forgotPassword() {
  return (
    <>
      <MainLayout>
        <section className="flex m-auto py-10 2lg:py-0 min-h-screen font-poppins">
          <div className='flex w-full 2lg:mt-20'>
            <div className='m-auto bg-gray-50/80 p-6 rounded-md'>
              <div>
                <h2 className='text-center text-sm font-bold tracking-wide text-gray-800'>
                  Selamat Datang di Website
                  <span className='text-lg font-extrabold tracking-wider text-fuchsia-600'> POJOK UMKM. </span>
                </h2>
              </div>

              <form>
                <div className="py-6">
                  <div className="block text-sm">
                    <label className="text-gray-800 font-medium">Email</label>
                    <input type="email" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm
                      focus:border-fuchsia-300 focus:ring focus:ring-fuchsia-200 focus:ring-opacity-50" placeholder="pojokumkm@contoh.com" />
                  </div>

                  {/* Button */}
                  <div className='text-center'>
                    <Link href="/change-password">
                      <button type='submit' className="w-52 h-8 mt-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                        Kirim Verifikasi
                      </button>
                    </Link>
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
        </section>
      </MainLayout>
    </>
  )
}
