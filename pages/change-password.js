import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";

export default function changePassword() {
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
                    <label className="text-gray-800 font-medium">Kata Sandi</label>
                    <input type="password" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm" 
                    placeholder="Kata Sandi" />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium">Verifikasi Kata Sandi</label>
                    <input type="password" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm" 
                    placeholder="Verifikasi Kata Sandi" />
                  </div>

                  {/* Button */}
                  <div className='text-center'>
                    <Link href="/">
                      <button type='submit' className="w-52 h-8 mt-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                        Ganti Kata Sandi
                      </button>
                    </Link>
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
