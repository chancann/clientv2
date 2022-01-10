export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='w-full py-6 border-t'>
      <section className="font-poppins w-5/6 mx-auto text-gray-800">
        <div className="text-center">
          <h2 className='font-extrabold tracking-wider text-fuchsia-600'> POJOK UMKM.</h2>
        </div>
        <h6 className='text-xs text-center font-light'><span className="font-semibold">&copy; {year}</span> Kecamatan Sepatan Kabupaten Tangerang</h6>
      </section>
    </footer>
  )
}
