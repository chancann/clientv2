import MainLayout from "../../../components/layouts/MainLayout";
import { useState } from "react";
import baseURL from "../../../api/baseURL";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Image from "next/image";
import heroAddProduct from "../../../public/heroAddProduct.svg";

export default function addProduct() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [urls, setUrls] = useState([
    {
      url: "",
    },
  ]);
  const [files, setFiles] = useState([]);
  const [form, setForm] = useState({
    image: "",
    title: "",
    category: "",
    author: "",
    description: "",
    price: null,
  });

  const onSubmit = async (e) => {
    try {
      setIsLoading(true);
      if (files) {
        const formData = new FormData();
        formData.append("title", form.title);
        formData.append("category", form.category);
        formData.append("description", form.description);
        formData.append("price", form.price);
        formData.append("author", router.query.id);

        for (var i = 0; i < files.length; i++) {
          formData.append("images", files[i]);
        }

        const response = await baseURL.post(`/api/product/add/`, formData);
        if (response.data.status === 200) {
          router.push(`/user/${router.query.id}`);
        }
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const filesChange = (e) => {
    const filesTarget = [...e.target.files];
    let urls = [];

    filesTarget.map((file) => {
      urls.push({ url: URL.createObjectURL(file) });
    });

    setFiles(filesTarget);
    setUrls(urls);
  };

  return (
    <>
      <MainLayout>
        <section className="flex items-center min-h-screen justify-center font-poppins">
          <div className="mx-auto w-full flex flex-col 2lg:flex-row items-center mt-20 2lg:mt-0">
            <figure className="hidden 2lg:inline-block">
              <Image
                src={heroAddProduct}
                alt="heroAddProduct"
                width={650}
                height={650}
              />
            </figure>

            <div className="w-full mx-auto px-6 py-4 rounded-md bg-gray-50/80">
              <div>
                <h2 className="text-center text-xl font-bold tracking-wide text-gray-800">
                  Tambah Produk
                </h2>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="2lg:flex 2lg:gap-x-8">
                  <div className="w-full py-6">
                    <div className="block text-sm">
                      <label className="px-2 text-gray-800 font-medium">
                        Nama Produk
                      </label>
                      <input
                        {...register("title", {
                          required: {
                            value: true,
                            message: "Masukkan nama produk!",
                          },
                        })}
                        onChange={(e) => {
                          setForm({ ...form, title: e.target.value });
                        }}
                        type="text"
                        className="form-input mt-1 block w-full text-sm border-none rounded-md shadow"
                        placeholder="Nama Produk"
                      />
                      {errors.title && (
                        <p className="px-2 pt-1 text-xs font-medium text-red-500">
                          {errors.title.message}
                        </p>
                      )}
                    </div>
                    <div className="block text-sm mt-5">
                      <label className="px-2 text-gray-800 font-medium">
                        Harga
                      </label>
                      <input
                        {...register("price", {
                          required: {
                            value: true,
                            message: "Masukkan harga!",
                          },
                        })}
                        onChange={(e) => {
                          setForm({ ...form, price: e.target.value });
                        }}
                        type="text"
                        className="form-input mt-1 block w-full text-sm border-none rounded-md shadow"
                        placeholder="Harga"
                      />
                      {errors.price && (
                        <p className="px-2 pt-1 text-xs font-medium text-red-500">
                          {errors.price.message}
                        </p>
                      )}
                    </div>
                    <div className="block text-sm mt-5">
                      <label className="px-2 text-gray-800 font-medium">
                        Deskripsi
                      </label>
                      <textarea
                        {...register("description", {
                          required: {
                            value: true,
                            message: "Masukkan deskripsi!",
                          },
                        })}
                        onChange={(e) => {
                          setForm({ ...form, description: e.target.value });
                        }}
                        className="form-input mt-1 block w-full text-sm border-none rounded-md shadow"
                        placeholder="Deskripsi"
                      ></textarea>
                      {errors.description && (
                        <p className="px-2 pt-1 text-xs font-medium text-red-500">
                          {errors.description.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="w-full 2lg:py-6">
                    <div className="block text-sm">
                      <label className="px-2 text-gray-800 font-medium">
                        Kategori
                      </label>
                      <select
                        {...register("category", {
                          required: {
                            value: true,
                            message: "Pilih kategori!",
                          },
                        })}
                        onChange={(e) => {
                          setForm({ ...form, category: e.target.value });
                        }}
                        className="form-select mt-1 block w-full text-sm border-none rounded-md shadow"
                      >
                        <option value="">Pilih Kategori</option>
                        <option value="Makanan">Makanan</option>
                        <option value="Minuman">Minuman</option>
                        <option value="Pakaian">Pakaian</option>
                        <option value="Kerajinan Tangan">
                          Kerajinan Tangan
                        </option>
                        <option value="Perawatan Tubuh">Perawatan Tubuh</option>
                      </select>
                      {errors.category && (
                        <p className="px-2 pt-1 text-xs font-medium text-red-500">
                          {errors.category.message}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-col mt-5 mb-2 text-sm">
                      <label className="px-2 text-gray-800 font-medium">
                        Gambar Produk
                      </label>
                      {/* <input onChange={filesChange} multiple type="file" className="mt-1 text-gray-800" /> */}
                      <label className="w-32 flex py-1 flex-col px-2 mt-1 items-center rounded tracking-wide border cursor-pointer hover:bg-fuchsia-500 hover:text-white">
                        <input
                          {...register("image", {
                            required: {
                              value: true,
                              message: "Pilih gambar produk!",
                            },
                          })}
                          onChange={filesChange}
                          multiple
                          accept="image/png, image/jpeg, image/jpg"
                          type="file"
                          className="hidden mb-2"
                        />
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1H8a3 3 0 00-3 3v1.5a1.5 1.5 0 01-3 0V6z"
                            clipRule="evenodd"
                          />
                          <path d="M6 12a2 2 0 012-2h8a2 2 0 012 2v2a2 2 0 01-2 2H2h2a2 2 0 002-2v-2z" />
                        </svg>
                        <span className="text-xs leading-none">
                          Pilih Gambar
                        </span>
                      </label>
                      {errors.image && (
                        <p className="px-2 pt-1 text-xs font-medium text-red-500">
                          {errors.image.message}
                        </p>
                      )}
                    </div>
                    <div className="grid grid-cols-4 gap-4">
                      {urls.map((url, index) => (
                        <img key={index} src={url.url} />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <button className="w-52 h-8 mt-6 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div
                          className="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full"
                          role="status"
                        ></div>
                        <span className="">Tunggu...</span>
                      </div>
                    ) : (
                      "Tambahkan Produk"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
