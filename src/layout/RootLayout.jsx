
import Header from "../components/Header";
import {Outlet} from "react-router";
import Footer from "../components/Footer";
import FloatingSidebar from "../components/FloatingSidebar";

const RootLayout = () => {
  return (
    <>
      <Header />
      <main className="relative">
        <Outlet />
        <FloatingSidebar />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
