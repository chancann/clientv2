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
import CryptoJS from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function profile() {
  const router = useRouter();
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [image, setImage] = useState("");
  const [file, setFile] = useState();
  const [userProducts, setUserProducts] = useState([]);
  const [detailUser, setDetailUser] = useState({
    nik: "",
    email: "",
    nama_lengkap: "",
    no_hp: "",
    alamat: "",
    password: "",
  });
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
    const file = e.target.files[0];
    const url = URL.createObjectURL(file);
    setFile(file);
    setImage(url);
  };

  const updateUser = async () => {
    try {
      if (file) {
        const formData = new FormData();
        formData.append("image", file);
        formData.append("nama_lengkap", detailUser.nama_lengkap);
        formData.append("no_hp", detailUser.no_hp);
        formData.append("alamat", detailUser.alamat);
        formData.append("password", detailUser.password);
        const response = await baseURL.put(`/api/user/update/${router.query.id}`, formData);
        if (response.data.status === 200) {
          getUserDetails();
          toast.success("Profile Berhasil Di Update", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
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
      }
      const response = await baseURL.put(`/api/user/update/${router.query.id}`, detailUser);
      if (response.data.status === 200) {
        getUserDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await baseURL.get(`/api/user/details/${router.query.id}`);
      if (response.data.status === 200) {
        const user = response.data.data;
        const cryptoSec = "pojokumkmkecamatansepatankabupatentangerang";
        const decryptPassword = CryptoJS.AES.decrypt(user.password, cryptoSec);
        const userPassword = decryptPassword.toString(CryptoJS.enc.Utf8);
        setDetailUser({
          nik: user.nik,
          email: user.email,
          nama_lengkap: user.nama_lengkap,
          no_hp: user.no_hp,
          alamat: user.alamat,
          password: userPassword,
        });
        setImage(`${baseURL.defaults.baseURL}/${user.image}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserProduct = async () => {
    try {
      const response = await baseURL.get(`/api/product/user/${router.query.id}`);
      if (response.data.status === 200) {
        const data = response.data.data;
        let userProducts = [];

        data.map((product) => {
          userProducts.push({
            ...product,
          });
        });
        setUserProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      getUserDetails();
      getUserProduct();
    } else {
      router.push("/");
    }
  }, [router.query.id]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="w-full mt-20 2lg:mt-0">
            <div className="w-full flex flex-col 2lg:flex-row items-center">
              <figure className="md:w-6/12 text-center 2lg:mb-10">
                <div className="block text-center">
                  <h2 className="p-4 text-gray-800 font-bold text-3xl">Profil</h2>
                </div>
                <div className="flex p-2 items-center justify-center">
                  <img className="w-[150px] h-[150px] object-cover rounded-full" src={image} />
                  {/* <Image src={image} alt="heroPhotoProfile" width={150} height={150} /> */}
                </div>
                {/* <div>
                  <input onChange={onFileChange} type="file" className="mt-1 w-full text-gray-800 text-sm" />
                </div> */}
                <div className="flex items-center justify-center mt-2">
                  <label className="flex py-1 px-2 flex-col items-center rounded tracking-wide border cursor-pointer hover:bg-fuchsia-500 hover:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs leading-none">Pilih Foto</span>
                    <input onChange={onFileChange} type="file" className="hidden" />
                  </label>
                </div>
              </figure>

              <div className="md:w-6/12 text-gray-800">
                <div className="mt-10 2lg:mt-0">
                  <div className="w-full">
                      <div className="block text-sm">
                        <label className="px-2 text-gray-800 font-medium">NIK</label>
                        <input
                          type="text"
                          className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                          defaultValue={detailUser.nik}
                        />
                      </div>
                      <div className="block text-sm">
                        <label className="px-2 text-gray-800 font-medium">Nama</label>
                        <input
                          type="text"
                          className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                          onChange={(e) => {
                            setDetailUser({ ...detailUser, nama_lengkap: e.target.value });
                          }}
                          defaultValue={detailUser.nama_lengkap}
                        />
                      </div>
                      <div className="block text-sm">
                        <label className="px-2 text-gray-800 font-medium">No HP</label>
                        <input
                          type="text"
                          className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                          onChange={(e) => {
                            setDetailUser({ ...detailUser, no_hp: e.target.value });
                          }}
                          defaultValue={detailUser.no_hp}
                        />
                      </div>
                      <div className="block text-sm">
                        <label className="px-2 text-gray-800 font-medium">Email</label>
                        <input
                          type="email"
                          className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"
                          defaultValue={detailUser.email}
                        />
                      </div>
                      <div className="block text-sm 2lg:mt-0">
                        <label className="px-2 text-gray-800 font-medium">Alamat</label>
                        <textarea 
                        onChange={(e) => {
                          setDetailUser({ ...detailUser, alamat: e.target.value });
                        }}
                        defaultValue={detailUser.alamat}
                        className="form-input mt-1 block w-full text-sm rounded-md border-gray-300 shadow-sm"/>
                      </div>
                      <div className="flex relative text-sm">
                        <label className="px-2 text-gray-800 absolute font-medium">Kata Sandi</label>
                        <input
                          className="form-input mt-1 block w-full text-sm border-none rounded-md shadow"
                          type={isPasswordShow ? "text" : "password"}
                            onChange={(e) => {
                              setDetailUser({ ...detailUser, password: e.target.value });
                            }}
                          defaultValue={detailUser.password}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => {setIsPasswordShow(!isPasswordShow);}} className="absolute h-4 w-4 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
                          <path className={!isPasswordShow ? "block" : "hidden"} fillRule="evenodd" d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z" clipRule="evenodd" />
                          <path className={!isPasswordShow ? "block" : "hidden"} d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z" />
                          <path className={isPasswordShow ? "block" : "hidden"} d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                          <path className={isPasswordShow ? "block" : "hidden"} fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                  </div>
                </div>

                <div className="md:w-6/12 flex items-center justify-center mt-4 gap-x-6">
                  <Link href={`/user/${router.query.id}/add-product`}>
                    <button className="w-28 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">Tambah Produk</button>
                  </Link>
                  <button onClick={updateUser} className="w-24 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                    Simpan Profil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="font-poppins">
          <div className="text-gray-800">
            <div className="text-center">
              <h2 className="p-4 font-bold text-3xl">Produk Anda</h2>
            </div>

            {/* Card */}
            {userProducts.length ? (
              <div className="pb-10">
                <Slider {...settings}>
                  {userProducts?.map((prod) => (
                    <div key={prod._id} className="p-2">
                      <Card prodId={prod._id} title={prod.title} createdAt={prod.createdAt} price={prod.price} author={prod.author ? prod.author.nama_lengkap : "Anonimous"} img={prod.images.length ? `${baseURL.defaults.baseURL}/${prod.images[0].data}` : ""} />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <h1 className="text-center">Anda Belum Menambahkan Produk</h1>
            )}
            {/* Card */}
          </div>
        </section>
      </MainLayout>
    </>
  );
}
