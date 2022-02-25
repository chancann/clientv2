import Card from "../../components/Card";
import MainLayout from "../../components/layouts/MainLayout";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baseURL from "../../api/baseURL";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import moment from "moment";
import "moment/locale/id";

export default function product() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [category, setCategory] = useState("");
  const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
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
        <section className="min-h-screen font-poppins">
          <div className="mt-20 text-gray-800">
            <div className="text-center">
              <h2 className="p-4 font-bold text-3xl">Produk</h2>
            </div>
            {/* <div className="flex justify-center items-center">
              <div
                className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div> */}
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
                {/* <div className="flex justify-end">
                  <div className="">
                    <button
                      onClick={() => {
                        setIsOpen(!isOpen);
                      }}
                      type="button"
                      className="p-2 text-sm inline-flex items-center hover:bg-gray-50 focus:outline-none"
                      id="menu-button"
                      aria-expanded="true"
                      aria-haspopup="true"
                    >
                      Pilih Kategori
                      <svg
                        className="-mr-1 ml-2 h-5 w-5"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div> */}

                {/* <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } z-10 origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none`}
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabIndex={-1}
                >
                  <div className="py-1" role="none">
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Makanan
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Minuman
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Pakaian
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Kerajinan Tangan
                    </a>
                    <a
                      href="/"
                      className="block px-4 py-2 text-sm hover:bg-gray-50"
                      role="menuitem"
                      tabIndex={-1}
                      id="menu-item-0"
                    >
                      Perawatan Tubuh
                    </a>
                  </div>
                </div> */}
              </div>
            </div>
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div
                  className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
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

            {/* <div className="flex justify-center mt-4">
              <nav>
                <ul className="flex list-style-none">
                  <li className="page-item">
                    <a
                      className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 focus:shadow-none"
                      href="#"
                      aria-label="Previous"
                    >
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      href="#"
                    >
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      href="#"
                    >
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      href="#"
                    >
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a
                      className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                      href="#"
                      aria-label="Next"
                    >
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div> */}
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
