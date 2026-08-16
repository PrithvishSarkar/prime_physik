import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router";
import { Suspense } from "react";
import SpinningLoader from "../SpinningLoader";

const Layout = () => {
  return (
    <main>
      <Navbar />
      <Suspense fallback={<SpinningLoader size={24} />}>
        <Outlet />
      </Suspense>
      <Footer />
    </main>
  );
};

export default Layout;
