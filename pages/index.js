import Image from "next/image";
import Slider from "react-slick";
import Card from "../components/Card";
import MainLayout from "../components/layouts/MainLayout";
import heroHome from "../public/heroHome.svg"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Home() {
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }

  return (
    <MainLayout>
      {/* Home */}
      <section className="flex min-h-screen items-center font-poppins">
        <div className='text-center 2lg:text-left'>
          <figure className='2lg:hidden'>
            <Image src={heroHome} alt="heroHome" width={400} height={400} />
          </figure>

          <div className="mb-2 text-gray-800">
            <h5 className="text-sm 2lg:text-base">Selamat Datang di Website</h5>
          </div>

          <div className='font-bold xl:w-11/12 text-xl 2lg:text-4xl mb-2 text-gray-800 '>
            <h2 className="tracking-wide">Katalog Online <span className="font-extrabold text-fuchsia-600 tracking-widest">POJOK UMKM</span></h2>
          </div>
          <div className='mb-8 tracking-tight xl:w-11/12 text-gray-800'>
            <h6 className="text-sm 2lg:text-base">Temukan Produk Lokal Terbaik dari Pojok UMKM Kecamatan Sepatan Kabupaten Tangerang</h6>
          </div>

          <div className='text-center 2lg:text-left'>
            <a href='https://drive.google.com/file/d/12f9z7cLPHpJ_uB2jN77Biu3W38CMrB1j/view'>
              <button className='w-52 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50'>
                Katalog Produk
              </button>
            </a>
          </div>
        </div>


        <figure className='m-auto hidden 2lg:inline-block'>
          <Image src={heroHome} alt="heroHome" />
        </figure>
      </section>
      {/* Home */}

      {/* Product */}
      <section className="font-poppins">
        <div className="text-gray-800">
          <div className='text-center'>
            <h2 className='p-4 font-bold text-3xl'>Produk</h2>
          </div>

          {/* Card */}
          <div className="pb-10">
            <Slider {...settings}>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
            </Slider>
          </div>
          {/* Card */}
        </div>
      </section>
      <section className="font-poppins">
        <div className="text-gray-800">
          <div className='text-center'>
            <h2 className='p-4 font-bold text-3xl'>Produk</h2>
          </div>

          {/* Card */}
          <div className="pb-10">
            <Slider {...settings}>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
            </Slider>
          </div>
          {/* Card */}
        </div>
      </section>
      <section className="font-poppins">
        <div className="text-gray-800">
          <div className='text-center'>
            <h2 className='p-4 font-bold text-3xl'>Produk</h2>
          </div>

          {/* Card */}
          <div className="pb-10">
            <Slider {...settings}>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
              <div className="p-2">
                <Card />
              </div>
            </Slider>
          </div>
          {/* Card */}
        </div>
      </section>
      {/* Product */}

    </MainLayout >
  )
}
