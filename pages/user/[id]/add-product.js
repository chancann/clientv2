import Link from "next/link"
import MainLayout from "../../../components/layouts/MainLayout"
import { useState } from "react"
import baseURL from "../../../api/baseURL";
import { useRouter } from "next/router";

export default function addProduct() {
  const router = useRouter()
  const [urls, setUrls] = useState([{
    url: ''
  }]) 
  const [files, setFiles] = useState([]) 
  const [form, setForm] = useState({
    image: '',
    title: "",
    category: "",
    author: "",
    description: "",
    price: null,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (files) {
        const formData = new FormData()
        formData.append('title', form.title)
        formData.append('category', form.category)
        formData.append('description', form.description)
        formData.append('price', form.price)
        formData.append('author', router.query.id)
        
        for (var i = 0; i < files.length; i++) {
          formData.append("images", files[i]);
        }

        const response = await baseURL.post(`/api/product/add/`, formData)
        if (response.data.status === 200) {
            router.push(`/user/${router.query.id}`)
          }
        }
    } catch (error) {
      console.log(error);
    }
  }

  const filesChange = (e) => {
    const filesTarget = [...e.target.files]
    let urls = []

    filesTarget.map(file => {
      urls.push({url: URL.createObjectURL(file)})
    })
    
    setFiles(filesTarget)
    setUrls(urls)
  }

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

              <form onSubmit={handleSubmit}>
                <div className="2lg:flex 2lg:gap-x-8">
                <div className="w-full py-6">
                  <div className="block text-sm">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Nama Produk</label>
                    <input onChange={(e) => { setForm({...form, title : e.target.value})}} type="text" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm" 
                    placeholder="Nama Produk" />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Harga</label>
                    <input onChange={(e) => { setForm({...form, price : e.target.value})}} type="text" className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm" 
                    placeholder="Harga" />
                  </div>
                  <div className="block text-sm mt-5">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Deskripsi</label>
                    <textarea onChange={(e) => { setForm({...form, description : e.target.value})}}  className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm" 
                    placeholder="Deskripsi">
                    </textarea>
                  </div>
                </div>

                <div className="w-full 2lg:py-6">
                  <div className="block text-sm">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Kategori</label>
                    <select onChange={(e) => { setForm({...form, category : e.target.value})}}  className="form-select mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm">
                      <option>Pilih Kategori</option>
                      <option>Makanan</option>
                      <option>Minuman</option>
                      <option>Pakaian</option>
                      <option>Kerajinan Tangan</option>
                      <option>Perawatan Tubuh</option>
                    </select>
                  </div>
                  <div className="flex flex-col mt-5 mb-2 text-sm">
                    <label className="text-gray-800 font-medium"><span className="text-red-500">&nbsp;*</span>Gambar</label>
                    <input onChange={filesChange} multiple type="file" className="mt-1 text-gray-800" />
                  </div>
                  <div className="grid grid-cols-4 gap-4">
                    {urls.map((url, index) => (
                      <img key={index} src={url.url}/>
                    ))}
                  </div>
                </div>
              </div>
              <div className='text-center'>
                  <button  className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                    Tambahkan Produk
                  </button>
              </div>
              </form>
            </div>

          </div>
        </section>
      </MainLayout>
    </>
  )
}
