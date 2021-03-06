import Image from "next/image";
import Link from "next/link";
import MainLayout from "../components/layouts/MainLayout";
import heroHome from "../public/heroHome.svg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <MainLayout>
      {/* Home */}
      <section className="flex min-h-screen items-center justify-center font-poppins">
        <div className="text-center 2lg:text-left">
          <motion.figure animate={{ y: [-100, 0] }} className="2lg:hidden">
            <Image src={heroHome} alt="heroHome" width={500} height={500} />
          </motion.figure>

          <motion.div animate={{ x: [-100, 0] }} className="mb-2 text-gray-800">
            <h5 className="text-sm 2lg:text-base">Selamat Datang di Website</h5>
          </motion.div>

          <motion.div
            animate={{ x: [-100, 0] }}
            className="font-bold xl:w-11/12 text-xl 2lg:text-4xl mb-2 text-gray-800 "
          >
            <h2 className="tracking-wide">
              Katalog Online{" "}
              <span className="font-extrabold text-fuchsia-600 tracking-widest">
                POJOK UMKM
              </span>
            </h2>
          </motion.div>
          <motion.div
            animate={{ x: [-100, 0] }}
            className="mb-8 tracking-tight xl:w-11/12 text-gray-800"
          >
            <h6 className="text-sm 2lg:text-base">
              Temukan Produk Lokal Terbaik dari Pojok UMKM Kecamatan Sepatan
              Kabupaten Tangerang
            </h6>
          </motion.div>

          <motion.div
            animate={{ x: [-100, 0] }}
            className="text-center 2lg:text-left"
          >
            <Link href="/product">
              <button className="w-52 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                Katalog Produk
              </button>
            </Link>
          </motion.div>
        </div>

        <motion.figure
          animate={{ x: [100, 0] }}
          className="m-auto hidden 2lg:inline-block"
        >
          <Image src={heroHome} alt="heroHome" width={1000} height={1000} />
        </motion.figure>
      </section>
      {/* Home */}
    </MainLayout>
  );
}
