import Link from "next/link";
import Head from "next/head";

export default function costum404() {
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <div className="flex font-poppins w-screen h-screen">
        <div className="flex flex-col items-center m-auto">
          <h1 className="font-bold text-center text-6xl">404</h1>
          <h3 className="font-semibold text-center text-lg">
            <span className="font-bold">Oops!</span> Halaman tidak ditemukan
          </h3>
          <p className="text-center text-sm">
            Halaman yang Anda cari tidak ada.
          </p>
          <div className="text-sm mt-10">
            <Link href="/">
              <button className="w-24 h-8 text-xs bg-fuchsia-600 hover:bg-fuchsia-700 rounded text-white">
                Beranda
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
