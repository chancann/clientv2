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
                  <table className="w-full">
                    <tbody className="text-sm">
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">NIK</td>
                        <td className="text-xs p-2 text-gray-500">{detailUser.nik}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">Nama Lengkap</td>
                        <td className="text-xs p-2 text-gray-500">
                          <input
                            onChange={(e) => {
                              setDetailUser({ ...detailUser, nama_lengkap: e.target.value });
                            }}
                            value={detailUser.nama_lengkap}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">No HP</td>
                        <td className="text-xs p-2 text-gray-500">
                          <input
                            onChange={(e) => {
                              setDetailUser({ ...detailUser, no_hp: e.target.value });
                            }}
                            value={`+${detailUser.no_hp}`}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">Email</td>
                        <td className="text-xs p-2 text-gray-500">{detailUser.email}</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">Alamat</td>
                        <td className="text-xs p-2 text-gray-500">
                          <input
                            onChange={(e) => {
                              setDetailUser({ ...detailUser, alamat: e.target.value });
                            }}
                            value={detailUser.alamat}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">Password</td>
                        <td className="text-xs p-2 text-gray-500">
                          <input
                            type={isPasswordShow ? "text" : "password"}
                            onChange={(e) => {
                              setDetailUser({ ...detailUser, password: e.target.value });
                            }}
                            value={detailUser.password}
                          />
                        </td>

                        <button
                          onClick={() => {
                            setIsPasswordShow(!isPasswordShow);
                          }}
                        >
                          Show Password
                        </button>
                      </tr>
                    </tbody>
                  </table>
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
              <h1>Anda Tidak Punya product asu</h1>
            )}
            {/* Card */}
          </div>
        </section>
      </MainLayout>
    </>
  );
}
