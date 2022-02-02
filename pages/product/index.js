import Slider from "react-slick";
import Card from "../../components/Card";
import MainLayout from "../../components/layouts/MainLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baseURL from "../../api/baseURL";
import { useEffect, useState } from "react";

export default function product() {
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

  return (
    <>
      <MainLayout>
        <section className="min-h-screen font-poppins">
          <div className="mt-20 text-gray-800">
            <div className="text-center">
              <h2 className="p-4 font-bold text-3xl">Produk</h2>
            </div>
            <div className="grid grid-cols-4">
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
