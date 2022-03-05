import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import baseURL from "../api/baseURL";
import Cookies from "js-cookie";
import decode from "jwt-decode";
import { motion } from "framer-motion";

export default function Modal() {
  const router = useRouter();
  const [isLoading, setIsloading] = useState(false);
  const [details, setDetails] = useState({});
  const [author, setAuthor] = useState({});
  const [isAuthor, setIsAuthor] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const deleteProduct = async () => {
    try {
      setIsloading(true);
      const response = await baseURL.delete(`api/product/${router.query.id}`);
      // console.log(response);

      if (response.data.status === 200) {
        router.push(`/user/${author._id}`);
        setIsloading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        className="w-[90px] uppercase absolute font-bold bottom-[38px] right-0 h-8 text-xs rounded text-red-500 bg-red-50/30 hover:bg-red-50/80"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Hapus
      </button>
      {showModal ? (
        <div>
          <motion.div animate={{ scale: [0.5, 1] }} className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 rounded-t">
                  <h3 className="text-2xl font-semibold">Hapus Produk</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-sm leading-relaxed">
                    Anda yakin ingin menghapusnya?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                  <button
                    className="w-[90px] uppercase font-bold bottom-[38px] right-0 h-8 text-xs rounded text-red-500 bg-red-50/30 hover:bg-red-50/80"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Batalkan
                  </button>
                  <button
                    className="w-[90px] uppercase font-bold bottom-[38px] right-0 h-8 text-xs rounded text-green-500 bg-green-50/30 hover:bg-green-50/80"
                    type="button"
                    onClick={deleteProduct}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div
                          className="spinner-border animate-spin inline-block w-4 h-4 border-1 rounded-full"
                          role="status"
                        ></div>
                        <span className="">Tunggu...</span>
                      </div>
                    ) : (
                      "Hapus"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      ) : null}
    </>
  );
}
