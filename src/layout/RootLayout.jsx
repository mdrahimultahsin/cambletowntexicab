import Header from "../components/Header";
import {Outlet} from "react-router";
import Footer from "../components/Footer";
import FloatingSidebar from "../components/FloatingSidebar";
import CallToAction from "../shared/CallToAction";
import ScrollToTop from "../utils/ScrollToTop";
import TopHeader from "../components/TopHeader";


const RootLayout = () => {
  return (
    <>
    <TopHeader />
        <ScrollToTop />
        <Header />
        <main className="relative">
          <Outlet />
          <FloatingSidebar />
        </main>
        <CallToAction />
        <Footer />
  
    </>
  );
};

export default RootLayout;
