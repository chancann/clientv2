import MainLayout from "../components/layouts/MainLayout";
import { motion } from "framer-motion";
export default function about() {
  return (
    <>
      <MainLayout>
        <section className="flex items-center font-poppins">
          <div className="pt-20 pb-4 text-gray-800">
            <div className="text-center">
              <h2 className="p-4 font-bold text-3xl">Tentang</h2>
            </div>
            <motion.div
              animate={{ y: [100, 0] }}
              className="flex flex-col items-center justify-center gap-3"
            >
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

              <div className="relative flex justify-center w-full">
                <iframe
                  className="w-full 2lg:h-[350px] h-[300px]"
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
            </motion.div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
