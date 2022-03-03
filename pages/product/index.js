import Card from "../../components/Card";
import MainLayout from "../../components/layouts/MainLayout";
import baseURL from "../../api/baseURL";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/id";

export default function product() {
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const response = await baseURL.get(`api/product`);
      // console.log(response);
      if (response.data.data.status === 200) {
        setProducts(response.data.data.data);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  useEffect(() => {
    if (category === "all") {
      getProducts();
    }

    const filterCategory = async () => {
      try {
        setIsLoading(true);
        const response = await baseURL.get(`api/product?category=${category}`);
        if (response.data.data.status === 200) {
          setProducts(response.data.data.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    filterCategory();
  }, [category]);

  return (
    <>
      <MainLayout>
        <section className="min-h-[90vh] font-poppins">
          <div className="mt-20 mb-4 text-gray-800">
            <div className="text-center">
              <h2 className="p-4 font-bold text-3xl">Produk</h2>
            </div>
            <div className="flex mb-6">
              <div className="w-full relative">
                <div className="flex justify-end">
                  <select
                    defaultValue={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                    name="cars"
                    id="cars"
                    className="
                  block
                  cursor-pointer
                  px-3
                  py-1.5
                  text-sm
                  text-gray-700
                  border-none
                  m-0
                  focus:text-gray-700 focus:bg-white focus:outline-none"
                  >
                    <option disabled selected="selected">
                      Pilih Kategori
                    </option>
                    <option value="all">Semua Kategori</option>
                    <option value="Makanan">Makanan</option>
                    <option value="Minuman">Minuman</option>
                    <option value="Pakaian">Pakaian</option>
                    <option value="Kerajinan Tangan">Kerajinan Tangan</option>
                    <option value="Perawatan Tubuh"> Perawatan Tubuh</option>
                  </select>
                </div>
              </div>
            </div>
            {isLoading ? (
              <div class="flex min-h-[50vh] justify-center items-center space-x-2">
                <div
                  class="spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0 text-blue-500"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div
                  class="
                  spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0
                    text-purple-500
                  "
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div
                  class="
                  spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0
                    text-green-500
                  "
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div
                  class="spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0 text-red-500"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                <div
                  class="
                  spinner-grow inline-block w-4 h-4 bg-current rounded-full opacity-0
                    text-yellow-500
                  "
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 2sm:grid-cols-2 md:grid-cols-3 2lg:grid-cols-4 gap-4">
                {products.map((prod) => (
                  <Card
                    prodId={prod._id}
                    key={prod._id}
                    title={prod.title}
                    createdAt={moment(prod.createdAt).locale("id")}
                    price={prod.price}
                    author={
                      prod.author ? prod.author.nama_lengkap : "Anonimous"
                    }
                    img={`${baseURL.defaults.baseURL}/${prod.images[0].data}`}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </MainLayout>
    </>
  );
}

// export async function getServerSideProps(context) {
//   const responseUser = await baseURL.get(`/api/produc?_limit=8`)
//     console.log(responseUser);
//   return {
//     props: {product}, // will be passed to the page component as props
//   }
// }
