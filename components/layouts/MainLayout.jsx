import React from "react";
import Header from "../Navbar";
import Footer from "../Footer";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="w-5/6 mx-auto">{children}</main>
      <Footer />
    </>
  );
}
