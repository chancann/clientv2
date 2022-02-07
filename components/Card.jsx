import Image from "next/image";
import Link from "next/link";
import moment from "moment";

export default function Card({ title, createdAt, price, author, img, prodId }) {
  // idr formatter
  const toIdr = (money) => {
    return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(money);
  };

  return (
    <div className="bg-white/80 shadow">
      <figure className="p-6 2sm:p-2">
        {/* <Image className="rounded-sm" src={img ? img : ""} alt="heroProduct" /> */}
        <img src={img} className="rounded-sm h-[250px] w-full object-cover" alt="" />
      </figure>
      <div>
        <h2 className="font-bold text-base text-center tracking-tight text-fuchsia-900/90 mb-2">{title}</h2>
        <h3 className="font-medium text-xs text-center mb-1">{author}</h3>
        <h4 className="font-semibold text-xs text-center text-red-400 mb-3">{toIdr(price)}</h4>
        <div className="flex items-center justify-around p-2">
          <h5 className="text-xs tracking-tighter">{moment(createdAt).locale("id").format('Do MMMM YYYY')}</h5>
          <p className="text-xl font-thin">|</p>
          <Link href="/detail">
            <Link href={`/product/${prodId}`} className="inline-flex items-center text-xs font-light cursor-pointer">
              <div className="flex items-center">
                <span className="text-[12px] cursor-pointer">Detail</span>
                <svg className="w-3 h-3 ml-2 cursor-pointer" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </Link>
        </div>
      </div>
    </div>
  );
}
