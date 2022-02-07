import Image from "next/image";
import Slider from "react-slick";
import Card from "../../../components/Card";
import { useState, useEffect } from "react";
import MainLayout from "../../../components/layouts/MainLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRouter } from "next/router";
import baseURL from "../../../api/baseURL";
import Link from "next/link";

export default function profile() {
  const router = useRouter()
  const [image, setImage] = useState("")
  const [file, setFile] = useState()
  const [detailUser, setDetailUser] = useState({
    nik: '',
    email: '',
    nama_lengkap: '',
    no_hp: 0,
    alamat: ''
  })
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const onFileChange = (e) => {
    const file = e.target.files[0]
    const url = URL.createObjectURL(file)
    setFile(file)
    setImage(url)
  }

  const updateUser = async () => {
    try {
      if (file) {
        const formData = new FormData()
        formData.append('image', file)
        formData.append('nama_lengkap', detailUser.nama_lengkap)
        formData.append('no_hp', detailUser.no_hp)
        formData.append('alamat', detailUser.alamat)
        const response = await baseURL.put(`/api/user/update/${router.query.id}`, formData)
        if (response.data.status === 200) {
          getUserDetails()
        }
      }
      const response = await baseURL.put(`/api/user/update/${router.query.id}`, detailUser)
      if (response.data.status === 200) {
        getUserDetails()
      }
    } catch (error) {
      console.log(error);
    }
  }
  
  const getUserDetails = async () => {
    try {
      const response = await baseURL.get(`/api/user/details/${router.query.id}`)
      if (response.data.status === 200) {
        const user = response.data.data
        setDetailUser({
          nik: user.nik,
          email: user.email,
          nama_lengkap: user.nama_lengkap,
          no_hp: user.no_hp,
          alamat: user.alamat
        })
        setImage(`${baseURL.defaults.baseURL}/${user.image}`)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (router.query.id) {
      getUserDetails()
    } else {
      router.push('/')
    }
  }, [router.query.id]);
  

  return (
    <>
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="w-full mt-20 2lg:mt-0">
            <div className="w-full flex flex-col 2lg:flex-row items-center">
              <figure className="md:w-6/12 text-center 2lg:mb-10">
                <div className="block text-center">
                  <h2 className="p-4 text-gray-800 font-bold text-3xl">Profil</h2>
                </div>
                <div className="flex p-2 items-center justify-center">
                  <img className="w-[150px] h-[150px] object-cover rounded-full" src={image}/>
                  {/* <Image src={image} alt="heroPhotoProfile" width={150} height={150} /> */}
                </div>
                {/* <div>
                  <input onChange={onFileChange} type="file" className="mt-1 w-full text-gray-800 text-sm" />
                </div> */}
                <div className="flex items-center justify-center mt-2">
                  <label className="flex py-1 px-2 flex-col items-center rounded tracking-wide border cursor-pointer hover:bg-fuchsia-500 hover:text-white">
                      <span className="text-sm leading-normal">Pilih Foto Profil</span>
                      <input onChange={onFileChange} type='file' className="hidden" />
                  </label>
                </div>
              </figure>
              <div className="md:w-6/12 text-gray-800">
                <div className="mt-10 2lg:mt-0">
                  <table className="w-full">
                    <tbody className="text-sm">
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">NIK</td>
                        <td className="text-xs p-2 text-gray-500">{detailUser.nik}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">Nama Lengkap</td>
                        <td className="text-xs p-2 text-gray-500">
                          <input onChange={(e) => {
                            setDetailUser({...detailUser, nama_lengkap : e.target.value})
                          }} value={detailUser.nama_lengkap} />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">No HP</td>
                        <td className="text-xs p-2 text-gray-500">
                        <input onChange={(e) => {
                            setDetailUser({...detailUser, no_hp : e.target.value})
                          }} value={detailUser.no_hp} />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">Email</td>
                        <td className="text-xs p-2 text-gray-500">{detailUser.email}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">Alamat</td>
                        <td className="text-xs p-2 text-gray-500"><input onChange={(e) => {
                            setDetailUser({...detailUser, alamat : e.target.value})
                          }} value={detailUser.alamat} /></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              <div className="md:w-6/12 flex items-center justify-center mt-4 gap-x-6">
                <Link href={`/user/${router.query.id}/add-product`}>
                  <button className='w-28 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50'>Tambah Produk</button>
                </Link>
                <button onClick={updateUser} className='w-24 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50'>Simpan Profil</button>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section className="font-poppins">
          <div className="text-gray-800">
            <div className="text-center">
              <h2 className="p-4 font-bold text-3xl">Produk</h2>
            </div>

            {/* Card */}
            <div className="pb-10">
              <Slider {...settings}>
                <div className="p-2">
                  <Card />
                </div>
                <div className="p-2">
                  <Card />
                </div>
                <div className="p-2">
                  <Card />
                </div>
                <div className="p-2">
                  <Card />
                </div>
                <div className="p-2">
                  <Card />
                </div>
                <div className="p-2">
                  <Card />
                </div>
              </Slider>
            </div>
            {/* Card */}
          </div>
        </section>
      </MainLayout>
    </>
  );
}
