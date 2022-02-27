import { useRouter } from "next/router";
import { useState } from "react";
import baseURL from "../api/baseURL";

export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const [author] = useState({});
  const router = useRouter();

  const deleteProduct = async () => {
    try {
      const response = await baseURL.delete(`api/product/${router.query.id}`);
      // console.log(response);

      if (response.data.status === 200) {
        router.push(`/user/${author._id}`);
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
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Hapus Produk</h3>
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
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Anda yakin ingin menghapusnya?
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Batalkan
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(deleteProduct);
                    }}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
