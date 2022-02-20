import Card from "../../components/Card";
import MainLayout from "../../components/layouts/MainLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baseURL from "../../api/baseURL";
import { useEffect, useState } from "react";

export default function product() {
  const [isOpen, setIsOpen] = useState(false);

  const [category, setCategory] = useState("");

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const response = await baseURL.get("api/product");

      if (response.data.data.status === 200) {
        setProducts(response.data.data.data);
      }
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
        const response = await baseURL.get(`api/product?category=${category}`);
        if (response.data.data.status === 200) {
          setProducts(response.data.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    filterCategory();
  }, [category]);

  return (
    <>
      <MainLayout>
        <section className="min-h-screen font-poppins">
          <div className="mt-20 text-gray-800">
            <div className="text-center">
              <h2 className="p-4 font-bold text-3xl">Produk</h2>
            </div>
            <div className="flex mb-6">
              <div className="w-full relative">
                <select
                  value={category}
                  onChange={(e) => {
                    setCategory(e.target.value);
                  }}
                  name="cars"
                  id="cars"
                >
                  <option disabled selected="selected">
                    Category
                  </option>
                  <option value="all">Semua Category</option>
                  <option value="Makanan">Makanan</option>
                  <option value="Minuman">Minuman</option>
                  <option value="Pakaian">Pakaian</option>
                  <option value="Kerajinan Tangan">Kerajinan Tangan</option>
                  <option value=" Perawatan Tubuh"> Perawatan Tubuh</option>
                </select>
              </div>
            </div>
            <div className="grid grid-cols-1 2sm:grid-cols-2 md:grid-cols-3 2lg:grid-cols-4 gap-4">
              {products.map((prod) => (
                <Card prodId={prod._id} key={prod._id} title={prod.title} createdAt={prod.createdAt} price={prod.price} author={prod.author ? prod.author.nama_lengkap : "Anonimous"} img={`${baseURL.defaults.baseURL}/${prod.images[0].data}`} />
              ))}
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
