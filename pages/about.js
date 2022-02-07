import Image from "next/image";
import MainLayout from "../components/layouts/MainLayout";
import heroAbout from "../public/heroAbout.jpg"

export default function about() {
  return (
    <>
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="w-full flex flex-col 2lg:flex-row items-center mt-20 2lg:mt-0">
            <figure className="2lg:w-5/12">
              <Image src={heroAbout} alt="heroAbout" className="w-full h-full object-cover"  />
            </figure>

            <div className="2lg:w-7/12 md:p-4 text-gray-800">
              <p>Kecamatan Sepatan merupakan salah satu wilayah pendukung perekonomian dan bagian Administrasi Pemerintah di Kabupaten Tangerang, yang memiliki visi yaitu “Terwujudnya Masyarakat Sepatan yang sejahtera, mandiri, berwawasan, wirausaha dan berorientasi agribisnis”. Untuk mewujudkan misi tersebut terbentuklah Pojok Usaha Mikro Kecil Menengah (UMKM) Kecamatan Sepatan, yang merupakan kegiatan perdagangan atau perniagaan, yang pengelolaannya dilakukan oleh individu atau badan usaha. Pojok UMKM adalah wadah binaan bagi para pelaku UMKM di Kecamatan Sepatan Kabupaten Tangerang.</p>
            </div>

          </div>
        </section>
      </MainLayout>
    </>
  )
}
