import Slider from "react-slick";
import Card from "../components/Card";
import MainLayout from "../components/layouts/MainLayout";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

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
    <>
      <MainLayout>
        <section className="min-h-screen font-poppins">

            <div className="mt-20 text-gray-800">
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
      </MainLayout>
    </>
  )
}
