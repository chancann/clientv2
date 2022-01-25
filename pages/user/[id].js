import Image from "next/image";
import Slider from "react-slick";
import Card from "../../components/Card";
import MainLayout from "../../components/layouts/MainLayout";
import heroPhotoProfile from "../../public/heroPhotoProfile.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function profile() {
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
  return (
    <>
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="w-full mt-20 2lg:mt-0">
            <div className="w-full flex flex-col 2lg:flex-row items-center">
              <figure className="text-center 2lg:mb-10">
                <div className="block text-center">
                  <h2 className="p-4 text-gray-800 font-bold text-3xl">Profil</h2>
                </div>
                <div className="p-2">
                  <Image src={heroPhotoProfile} alt="heroPhotoProfile" width={150} height={150} />
                </div>
                <div>
                  <input type="file" className="mt-1 w-full text-gray-800 text-sm" />
                </div>
              </figure>

              <div className="w-full text-gray-800">
                <div className="mt-10 2lg:mt-0">
                  <table className="w-full">
                    <tbody className="text-sm">
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">NIK</td>
                        <td className="text-xs p-2 text-gray-500">365xxxxxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">Nama Lengkap</td>
                        <td className="text-xs p-2 text-gray-500">Chancan Yadi</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">No HP</td>
                        <td className="text-xs p-2 text-gray-500">08xxxxxxxxxx</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">Email</td>
                        <td className="text-xs p-2 text-gray-500">chancan@gmail.com</td>
                      </tr>
                      <tr>
                        <td className="font-semibold p-2 text-gray-800">Alamat</td>
                        <td className="text-xs p-2 text-gray-500">Jl. Raya Mauk No.89, Sepatan, Tangerang, Banten 15520, Indonesia</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="font-poppins">
          <div className="text-gray-800">
            <div className="text-center">
              <h2 className="p-4 font-bold text-3xl">Produk</h2>
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
  );
}
