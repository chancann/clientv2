import Link from "next/link"
import MainLayout from "../../components/layouts/MainLayout"

export default function addProduct() {
  return (
    <>
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="w-full flex flex-col 2lg:flex-row items-center mt-20 2lg:mt-0">

            <div className='w-full mx-auto px-6 py-4 rounded-md bg-gray-50/80'>
              <div>
                <h2 className='text-center text-xl font-bold tracking-wide text-gray-800'>
                  Tambah Produk
                </h2>
              </div>

              <form className="2lg:flex 2lg:gap-x-8">
                <div className="w-full py-6">
                  <div className="block text-sm">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Nama Produk</label>
                    <input type="text" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm" 
                    placeholder="Nama Produk" />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Harga</label>
                    <input type="text" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm" 
                    placeholder="Harga" />
                  </div>
                  <div className="flex flex-col mt-5 text-sm">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Gambar</label>
                    <input type="file" className="mt-1 text-gray-800" />
                  </div>
                </div>

                <div className="w-full 2lg:py-6">
                  <div className="block text-sm">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Kategori</label>
                    <select className="form-select mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm">
                      <option>Pilih Kategori</option>
                      <option>Makanan</option>
                      <option>Minuman</option>
                      <option>Pakaian</option>
                      <option>Kerajinan Tangan</option>
                      <option>Perawatan Tubuh</option>
                    </select>
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Deskripsi</label>
                    <textarea className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm" 
                    placeholder="Deskripsi">
                    </textarea>
                  </div>
                </div>
              </form>
              {/* Button */}
              <div className='text-center'>
                <Link href="/">
                  <button type='submit' className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                    Tambahkan Produk
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </section>
      </MainLayout>
    </>
  )
}
