import Link from "next/link";
import moment from "moment";
import { motion } from "framer-motion";

export default function Card({ title, createdAt, price, author, img, prodId }) {
  // idr formatter
  const toIdr = (money) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(money);
  };

  return (
    <motion.div
      animate={{ scale: [0, 1] }}
      className="mx-2 my-1 bg-white/80 shadow"
    >
      <figure className="relative overflow-hidden bg-no-repeat bg-cover">
        {/* <Image className="rounded-sm" src={img ? img : ""} alt="heroProduct" /> */}
        <img
          src={img}
          className="rounded-sm w-full h-[260px] object-cover hover:scale-105 transition duration-300 ease-in-out"
          alt=""
        />
      </figure>
      <div className="mt-3">
        <h2 className="font-bold text-base text-center tracking-tight text-fuchsia-900/90 mb-2">
          {title}
        </h2>
        <h3 className="font-medium text-xs text-center mb-1">{author}</h3>
        <h4 className="font-semibold text-xs text-center text-red-400 mb-3">
          {toIdr(price)}
        </h4>
        <div className="flex items-center justify-around p-2">
          <h5 className="text-xs tracking-tighter">
            {moment(createdAt).locale("id").fromNow()}
          </h5>
          <p className="text-xl font-thin">|</p>
          <Link href={`/product/${prodId}`} className="">
            <div className="flex items-center text-xs cursor-pointer font-medium hover:text-fuchsia-500">
              <span className="text-[12px]">Detail</span>
              <svg
                className="w-3 h-3 ml-2 animate-wiggle"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
