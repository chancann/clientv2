import Image from "next/image"
import Link from "next/link"
import heroProduct from "../public/heroProduct.jpg"

export default function Card() {
  return (
    <div className="bg-white/80 shadow">
      <figure className="p-6 2sm:p-2">
        <Image className="rounded-sm" src={heroProduct} alt="heroProduct" />
      </figure>
      <div>
        <h2 className="font-bold text-base text-center tracking-tight text-fuchsia-900/90 mb-2">Ayam Goreng Mentah</h2>
        <h3 className='font-medium text-xs text-center mb-1'>Penjual</h3>
        <h4 className='font-semibold text-xs text-center text-red-400 mb-3'>Rp. 20.000</h4>
        <div className="flex items-center justify-around p-2">
        <h5 className="text-xs font-light tracking-tighter">25 Desember 2021</h5>
        <p className="text-xl font-thin">|</p>
        <Link href="/detail">
          <button className="inline-flex items-center text-xs font-light">
            Detail
            <svg className="w-3 h-3 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1} fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </button>
        </Link>
      </div>
    </div>
    </div >
  )
}
