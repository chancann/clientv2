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
import heroEmptyProduct from "../../../public/heroEmptyProduct.svg";
import CryptoJS from "crypto-js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import moment from "moment";

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
        const response = await baseURL.put(
          `/api/user/update/${router.query.id}`,
          formData
        );
        if (response.data.status === 200) {
          getUserDetails();
          toast.success("Profil Berhasil Tersimpan!", {
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
      const response = await baseURL.put(
        `/api/user/update/${router.query.id}`,
        detailUser
      );
      if (response.data.status === 200) {
        getUserDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getUserDetails = async () => {
    try {
      const response = await baseURL.get(
        `/api/user/details/${router.query.id}`
      );
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
      const response = await baseURL.get(
        `/api/product/user/${router.query.id}`
      );
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="w-full mt-20">
            <div className="w-full flex flex-col items-center">
              <figure className="md:w-6/12 text-center">
                <div className="block text-center">
                  <h2 className="p-4 text-gray-800 font-bold text-3xl">
                    Profil
                  </h2>
                </div>
                <div className="flex p-2 items-center justify-center">
                  <img
                    className="w-[150px] h-[150px] object-cover rounded-full"
                    src={image}
                  />
                  {/* <Image src={image} alt="heroPhotoProfile" width={150} height={150} /> */}
                </div>
                {/* <div>
                  <input onChange={onFileChange} type="file" className="mt-1 w-full text-gray-800 text-sm" />
                </div> */}
                <div className="flex items-center justify-center mt-2 mb-4">
                  <label className="flex py-1 px-2 flex-col items-center rounded tracking-wide border cursor-pointer hover:bg-fuchsia-500 hover:text-white">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-xs leading-none">Pilih Foto</span>
                    <input
                      onChange={onFileChange}
                      type="file"
                      accept="image/png, image/jpg, image/jpeg"
                      className="hidden"
                    />
                  </label>
                </div>
              </figure>

              <div className="md:w-6/12 text-gray-800">
                <div className="mt-10 2lg:mt-0">
                  <div className="w-full">
                    <div className="relative mb-4 text-sm">
                      <label className="absolute px-2 left-0 inset-y-0 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </label>
                      <input
                        type="text"
                        className="form-input appearance-none pl-9 mt-1 block w-full text-sm border-none rounded-md shadow"
                        defaultValue={detailUser.nik}
                      />
                    </div>
                    <div className="relative mb-4 text-sm">
                      <label className="absolute px-2 left-0 inset-y-0 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </label>
                      <input
                        type="text"
                        className="form-input appearance-none pl-9 mt-1 block w-full text-sm border-none rounded-md shadow"
                        onChange={(e) => {
                          setDetailUser({
                            ...detailUser,
                            nama_lengkap: e.target.value,
                          });
                        }}
                        defaultValue={detailUser.nama_lengkap}
                      />
                    </div>
                    <div className="relative mb-4 text-sm">
                      <label className="absolute px-2 left-0 inset-y-0 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2H6zm4 14a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </label>
                      <input
                        type="text"
                        className="form-input appearance-none pl-9 mt-1 block w-full text-sm border-none rounded-md shadow"
                        onChange={(e) => {
                          setDetailUser({
                            ...detailUser,
                            no_hp: e.target.value,
                          });
                        }}
                        defaultValue={detailUser.no_hp}
                      />
                    </div>
                    <div className="relative mb-4 text-sm">
                      <label className="absolute px-2 left-0 inset-y-0 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </label>
                      <input
                        type="email"
                        className="form-input appearance-none pl-9 mt-1 block w-full text-sm border-none rounded-md shadow"
                        defaultValue={detailUser.email}
                      />
                    </div>
                    <div className="relative mb-4 text-sm">
                      <label className="absolute px-2 left-0 top-[7px] flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </label>
                      <textarea
                        onChange={(e) => {
                          setDetailUser({
                            ...detailUser,
                            alamat: e.target.value,
                          });
                        }}
                        defaultValue={detailUser.alamat}
                        className="form-input appearance-none pl-9 mt-1 block w-full text-sm border-none rounded-md shadow"
                      />
                    </div>
                    <div className="relative mb-4 text-sm">
                      <label className="absolute px-2 left-0 inset-y-0 flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </label>
                      <input
                        className="form-input appearance-none pl-9 mt-1 block w-full text-sm border-none rounded-md shadow"
                        type={isPasswordShow ? "text" : "password"}
                        onChange={(e) => {
                          setDetailUser({
                            ...detailUser,
                            password: e.target.value,
                          });
                        }}
                        defaultValue={detailUser.password}
                      />
                      <div className="absolute h-4 w-4 cursor-pointer inset-y-0 right-0 flex items-center mt-[10px] mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={() => {
                            setIsPasswordShow(!isPasswordShow);
                          }}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            className={!isPasswordShow ? "block" : "hidden"}
                            fillRule="evenodd"
                            d="M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z"
                            clipRule="evenodd"
                          />
                          <path
                            className={!isPasswordShow ? "block" : "hidden"}
                            d="M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z"
                          />
                          <path
                            className={isPasswordShow ? "block" : "hidden"}
                            d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                          />
                          <path
                            className={isPasswordShow ? "block" : "hidden"}
                            fillRule="evenodd"
                            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center mt-4 gap-x-2">
                  <Link href={`/user/${router.query.id}/add-product`}>
                    <button className="w-[110px] right-[105px] h-8 font-medium text-xs rounded text-emerald-500 bg-emerald-50/30 hover:bg-emerald-50/80">
                      Tambah Produk
                    </button>
                  </Link>
                  <button
                    onClick={updateUser}
                    className="w-[110px] right-[105px] h-8 font-medium text-xs rounded text-blue-500 bg-blue-50/30 hover:bg-blue-50/80"
                  >
                    Simpan Profil
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="font-poppins mt-6">
          <div className="text-gray-800">
            <div className="text-center">
              <h2 className="p-4 font-bold text-3xl">Produk Anda</h2>
            </div>

            {/* Card */}
            {userProducts.length ? (
              <div className="my-5">
                <Slider {...settings}>
                  {userProducts?.map((prod) => (
                    <div key={prod._id}>
                      <Card
                        prodId={prod._id}
                        title={prod.title}
                        createdAt={moment(prod.createdAt).locale("id")}
                        price={prod.price}
                        author={
                          prod.author ? prod.author.nama_lengkap : "Anonimous"
                        }
                        img={
                          prod.images.length
                            ? `${baseURL.defaults.baseURL}/${prod.images[0].data}`
                            : ""
                        }
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            ) : (
              <figure className="flex justify-center">
                <Image
                  src={heroEmptyProduct}
                  alt="heroEmptyProduct"
                  width={350}
                  height={350}
                />
              </figure>
            )}
            {/* Card */}
          </div>
        </section>
      </MainLayout>
    </>
  );
}
