import Image from "next/image";
import MainLayout from "../../components/layouts/MainLayout";
import heroProduct from "../../public/heroProduct.jpg";

export default function detail() {
  return (
    <>
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="w-full flex flex-col 2lg:flex-row items-center mt-20 2lg:mt-0">
            <figure>
              <Image src={heroProduct} alt="heroProduct" width={350} height={350} />
            </figure>

            <div className="md:w-4/5 h-auto md:p-4 text-gray-800">
              <h2 className="mb-2 text-xl font-bold">Makanan</h2>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-fuchsia-900/90">Ayam Goreng Mentah</h3>
              <h4 className="mb-2 font-medium">Penjual</h4>
              <h5 className="mb-2 text-xs">Jl. Raya Mauk No.89, Sepatan, Tangerang, Banten 15520, Indonesia</h5>
              <h6 className="mb-2 text-xs">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</h6>
              <h3 className="mb-2 text-sm font-medium">
                Harga:
                <p className="text-lg font-semibold text-red-400">Rp. 20.000</p>
              </h3>
              <button className="w-52 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">Hubungi Penjual</button>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
