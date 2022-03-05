import Image from "next/image";
import MainLayout from "../components/layouts/MainLayout";
import heroAbout from "../public/heroAbout.jpg";

export default function about() {
  return (
    <>
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="pt-20 pb-4 text-gray-800">
            <div className="text-center">
              <h2 className="p-4 font-bold text-3xl">Tentang</h2>
            </div>
            <div className="flex flex-col items-center justify-center gap-3">
              <div className="w-full 2lg:w-2/3">
                <p className="first-letter:text-[30px] first-letter:leading-none first-letter:text-fuchsia-600 first-letter:font-extrabold text-justify md:text-center text-[12px] 2lg:text-[14px]">
                  <span className="font-extrabold tracking-wider text-fuchsia-600">
                    Kecamatan{" "}
                    <span className="text-[30px] leading-none text-fuchsia-600 font-extrabold">
                      S
                    </span>
                    epatan{" "}
                  </span>{" "}
                  merupakan salah satu wilayah pendukung perekonomian dan bagian
                  Administrasi Pemerintah di Kabupaten Tangerang, yang memiliki
                  visi yaitu “Terwujudnya Masyarakat Sepatan yang sejahtera,
                  mandiri, berwawasan, wirausaha dan berorientasi agribisnis”.
                  Untuk mewujudkan misi tersebut terbentuklah Pojok Usaha Mikro
                  Kecil Menengah (UMKM) Kecamatan Sepatan, yang merupakan
                  kegiatan perdagangan atau perniagaan, yang pengelolaannya
                  dilakukan oleh individu atau badan usaha.{" "}
                  <span className="font-extrabold tracking-wider text-fuchsia-600">
                    POJOK UMKM
                  </span>{" "}
                  adalah wadah binaan bagi para pelaku UMKM di Kecamatan Sepatan
                  Kabupaten Tangerang.
                </p>
              </div>

              <div className="relative flex justify-center w-full p-2">
                <iframe
                  className="w-full 2lg:h-[350px] h-[250px]"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.089394074696!2d106.57288694790621!3d-6.118668399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a0049502b954b%3A0xd0c256913a94ff6c!2sKantor%20Kecamatan%20Sepatan!5e0!3m2!1sid!2sid!4v1646384786005!5m2!1sid!2sid"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
                <div className="absolute flex z-20 bottom-4 bg-white/95 w-2/5 justify-center items-center min-h-28 rounded-sm py-3 px-4">
                  <button className="w-[100px] h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                    <a
                      className="text-[12px]"
                      href="https://goo.gl/maps/xCmuAs6MzUeV35ATA"
                    >
                      Lokasi
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="flex min-h-screen items-center font-poppins">
          <div className="w-full flex flex-col 2lg:flex-row items-center mt-20 2lg:mt-0">
            <figure className="2lg:w-5/12 hidden">
              <Image
                src={heroAbout}
                alt="heroAbout"
                className="object-cover object-center rounded-sm shadow"
              />
            </figure>
            <div className="block text-center">
              <h2 className="p-4 font-bold text-3xl">Tentang</h2>
            </div>

            <div className="p-3 2lg:w-1/2 text-gray-600 text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="hidden md:inline-block w-8 h-8 text-fuchsia-600 mt-2 mb-4"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="first-letter:text-[30px] first-letter:leading-none first-letter:text-fuchsia-600 first-letter:font-extrabold text-justify md:text-center text-[12px] 2lg:text-[14px]">
                <span className="font-extrabold tracking-wider text-fuchsia-600">
                  Kecamatan{" "}
                  <span className="text-[30px] leading-none text-fuchsia-600 font-extrabold">
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
                individu atau badan usaha.{" "}
                <span className="font-extrabold tracking-wider text-fuchsia-600">
                  POJOK UMKM
                </span>{" "}
                adalah wadah binaan bagi para pelaku UMKM di Kecamatan Sepatan
                Kabupaten Tangerang.
              </p>
              <span className="inline-block animate-rolling h-1 w-16 rounded bg-fuchsia-600 mt-4"></span>
            </div>
            <div className="relative w-full 2lg:w-1/2 flex flex-col 2lg:flex-row justify-center mb-4">
              <iframe
                className="w-full 2lg:h-[400px] h-[250px]"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.089394074696!2d106.57288694790621!3d-6.118668399999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6a0049502b954b%3A0xd0c256913a94ff6c!2sKantor%20Kecamatan%20Sepatan!5e0!3m2!1sid!2sid!4v1646384786005!5m2!1sid!2sid"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </section> */}
      </MainLayout>
    </>
  );
}
