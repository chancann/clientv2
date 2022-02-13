import Image from "next/image";
import { useState, useEffect } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import heroProduct from "../../public/heroProduct.jpg";
import { useRouter } from "next/router";
import baseURL from "../../api/baseURL";
import Slider from "react-slick";
import moment from "moment";
import 'moment/locale/id'  

export default function detail() {
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
  const router = useRouter();
  const [details, setDetails] = useState({});
  const [author, setAuthor] = useState({});

  const getProductDetails = async () => {
    try {
      const response = await baseURL.get(`api/product/${router.query.id}`);
      // console.log(response);

      if (response.data.status === 200) {
        setDetails(response.data.data);
        setAuthor(response.data.data.author);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [router]);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat('id-ID',
      { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
    ).format(money);
  }
  return (
    <>
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="w-full flex flex-col 2lg:flex-row items-center mt-20 2lg:mt-0">
            <figure>
              <Slider {...settings}></Slider>
            </figure>
            {details.images?.map((image, index) => (
              <div className="p-2" key={index}>
                <img src={`${baseURL.defaults.baseURL}/${image.data}`} alt="" />
              </div>
            ))}

            <div className="md:w-4/5 h-auto md:p-4 text-gray-800">
              <h2 className="mb-2 text-xl font-bold">{details.category}</h2>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-fuchsia-900/90">{details.title}</h3>
              <h5 className="mb-2 text-xs font-medium">{author.nama_lengkap}</h5>
              <h4 className="mb-2 font-medium">{author.alamat}</h4>
              <h6 className="mb-2 text-xs">{details.description}</h6>
              <h5 className="mb-2 text-xs tracking-tighter">{moment(details.createdAt).locale('id').fromNow()}</h5>
              <h3 className="mb-2 text-sm font-medium">
                Harga:
                <p className="text-lg font-semibold text-red-400">{`${formatRupiah(details.price)}`}</p>
              </h3>
              <button className="w-52 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                <a target="_blank" href={`https://api.whatsapp.com/send?phone=${author.no_hp}&text=Hallo+Bisa+saya+pesan+${details.title}`} >
                  Hubungi Penjual
                </a>
              </button>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
