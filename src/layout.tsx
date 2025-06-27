import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar />
      <main className="max-w-[1440px] mx-auto">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
