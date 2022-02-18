import Image from "next/image";
import MainLayout from "../components/layouts/MainLayout";
import heroAbout from "../public/heroAbout.jpg";

export default function about() {
  return (
    <>
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="w-full flex flex-col 2lg:flex-row items-center mt-20 2lg:mt-0">
            <figure className="2lg:w-5/12">
              <Image
                src={heroAbout}
                alt="heroAbout"
                className="object-cover object-center rounded-md shadow"
              />
            </figure>

            <div className="2lg:w-7/12 p-3 text-gray-600 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="hidden md:inline-block w-8 h-8 text-gray-400 mt-2 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="first-letter:text-[30px] first-letter:leading-none first-letter:text-fuchsia-600 first-letter:font-bold text-justify md:text-center">
                <span className="italic font-bold">
                  Kecamatan{" "}
                  <span className="text-[30px] leading-none text-fuchsia-600 font-bold">
                    S
                  </span>
                  epatan{" "}
                </span>{" "}
                merupakan salah satu wilayah pendukung perekonomian dan bagian
                Administrasi Pemerintah di Kabupaten Tangerang, yang memiliki
                visi yaitu “Terwujudnya Masyarakat Sepatan yang sejahtera,
                mandiri, berwawasan, wirausaha dan berorientasi agribisnis”.
                Untuk mewujudkan misi tersebut terbentuklah Pojok Usaha Mikro
                Kecil Menengah (UMKM) Kecamatan Sepatan, yang merupakan kegiatan
                perdagangan atau perniagaan, yang pengelolaannya dilakukan oleh
                individu atau badan usaha. Pojok UMKM adalah wadah binaan bagi
                para pelaku UMKM di Kecamatan Sepatan Kabupaten Tangerang.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-fuchsia-600 mt-4 mb-3"></span>
            </div>
            {/* <section className="text-gray-600">
              <div className="container mx-auto">
                <div className="mx-auto text-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="hidden md:inline-block w-8 h-8 text-gray-400 mt-2 mb-4"
                    viewBox="0 0 975.036 975.036"
                  >
                    <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                  </svg>
                  <p className="leading-relaxed text-sm p-2 text-left">
                    Kecamatan Sepatan merupakan salah satu wilayah pendukung
                    perekonomian dan bagian Administrasi Pemerintah di Kabupaten
                    Tangerang, yang memiliki visi yaitu “Terwujudnya Masyarakat
                    Sepatan yang sejahtera, mandiri, berwawasan, wirausaha dan
                    berorientasi agribisnis”. Untuk mewujudkan misi tersebut
                    terbentuklah Pojok Usaha Mikro Kecil Menengah (UMKM)
                    Kecamatan Sepatan, yang merupakan kegiatan perdagangan atau
                    perniagaan, yang pengelolaannya dilakukan oleh individu atau
                    badan usaha. Pojok UMKM adalah wadah binaan bagi para pelaku
                    UMKM di Kecamatan Sepatan Kabupaten Tangerang.
                  </p>
                  <h2 className="font-extrabold tracking-wider text-fuchsia-600">
                    POJOK UMKM
                  </h2>
                  <p className="text-gray-500 text-xs">Kecamatan Sepatan Kabupaten Tangerang</p>
                </div>
              </div>
            </section> */}
          </div>
        </section>
      </MainLayout>
    </>
  );
}
