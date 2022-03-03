import { useState, useEffect } from "react";
import MainLayout from "../../components/layouts/MainLayout";
import { useRouter } from "next/router";
import baseURL from "../../api/baseURL";
import moment from "moment";
import "moment/locale/id";
import Cookies from "js-cookie";
import decode from "jwt-decode";
import Link from "next/link";
import Modal from "../../components/Modal";

export default function detail() {
  const router = useRouter();
  const [details, setDetails] = useState({});
  const [author, setAuthor] = useState({});
  const [isAuthor, setIsAuthor] = useState(false);

  const getProductDetails = async () => {
    try {
      const response = await baseURL.get(`api/product/${router.query.id}`);
      // console.log(response);

      if (response.data.status === 200) {
        setDetails(response.data.data);
        setAuthor(response.data.data.author);

        const token = Cookies.get("token");
        const user = decode(token);

        if (user._id === response.data.data.author._id) {
          setIsAuthor(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, [router]);

  const formatRupiah = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };
  return (
    <>
      <MainLayout>
        <section className="flex items-center min-h-screen font-poppins">
          <div className="w-full flex flex-col 2lg:flex-row items-center mt-20 2lg:mt-0">
            <figure className="mb-3">
                {details.images?.map((image, index) => (
                  <div className="relative overflow-hidden bg-no-repeat bg-cover" key={index}>
                    <img
                      className="w-[400px] h-[350px] object-cover rounded-sm hover:scale-105 transition duration-300 ease-in-out"
                      src={`${baseURL.defaults.baseURL}/${image.data}`}
                      alt=""
                    />
                  </div>
                ))}
            </figure>

            <div className="flex flex-col md:w-4/5 h-auto md:p-4 text-gray-800">
              <h2 className="mb-2 text-xl font-bold">{details.category}</h2>
              <h3 className="mb-2 text-lg font-bold tracking-tight text-fuchsia-900/90">
                {details.title}
              </h3>
              <h5 className="mb-2 text-xs font-medium">
                {author.nama_lengkap}
              </h5>
              <h4 className="mb-2 font-medium">{author.alamat}</h4>
              <h6 className="mb-2 text-xs">{details.description}</h6>
              <h5 className="mb-2 text-xs tracking-tighter">
                {moment(details.createdAt).locale("id").fromNow()}
              </h5>
              <div>
                <h2 className="mb-2 text-sm font-medium">
                  Harga:
                  <p className="text-lg font-semibold text-red-400">{`${formatRupiah(
                    details.price
                  )}`}</p>
                </h2>
              </div>
              <div className="relative w-full mb-2">
                {isAuthor && (
                  <Link href={`/user/${author._id}/update/${router.query.id}`}>
                    <button className="w-[90px] uppercase absolute font-bold bottom-[38px] right-[95px] h-8 text-xs rounded text-blue-500 bg-blue-50/30 hover:bg-blue-50/80">
                      Ubah
                    </button>
                  </Link>
                )}
                {isAuthor && (
                  <>
                    <Modal></Modal>
                  </>
                )}
                <button className="w-52 h-8 text-xs rounded text-slate-50 bg-fuchsia-600 hover:bg-fuchsia-500 shadow hover:shadow-fuchsia-500/50">
                  <a
                    target="_blank"
                    href={`https://api.whatsapp.com/send?phone=${author.no_hp}&text=Hallo+Bisa+saya+pesan+${details.title}`}
                  >
                    Hubungi Penjual
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
