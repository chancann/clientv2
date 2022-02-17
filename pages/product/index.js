import Slider from "react-slick";
import Card from "../../components/Card";
import MainLayout from "../../components/layouts/MainLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baseURL from "../../api/baseURL";
import { useEffect, useState } from "react";
import moment from "moment";
import "moment/locale/id";

export default function product() {
  const [isOpen, setIsOpen] = useState(false)
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
            <div className='flex mb-6'>
          <div className="w-full relative">
            <div className='flex justify-end'>
              <div className=''>
                <button onClick={() => { setIsOpen(!isOpen) }} type="button" className="p-2 text-sm inline-flex items-center hover:bg-gray-50 focus:outline-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
                  Pilih Kategori
                  <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>

            <div className={`${isOpen ? 'block' : 'hidden'} z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
              <div className="py-1" role="none">

                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                  Makanan
                </a>
                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                  Minuman
                </a>
                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                  Pakaian
                </a>
                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                  Kerajinan Tangan
                </a>
                <a href="/" className="block px-4 py-2 text-sm hover:bg-gray-50" role="menuitem" tabIndex={-1} id="menu-item-0">
                  Perawatan Tubuh
                </a>

              </div>
            </div>
          </div>
        </div>
            <div className="grid grid-cols-1 2sm:grid-cols-2 md:grid-cols-3 2lg:grid-cols-4 gap-4">
              {products.map((prod) => (
                <Card prodId={prod._id} key={prod._id} title={prod.title} createdAt={moment(prod.createdAt).locale("id")} price={prod.price} author={prod.author ? prod.author.nama_lengkap : "Anonimous"} img={`${baseURL.defaults.baseURL}/${prod.images[0].data}`} />
              ))}
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
