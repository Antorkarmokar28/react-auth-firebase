import { Outlet } from "react-router";
import Navbar from "../../components/shared/Navbar/Navbar";
import Footer from "../../components/shared/Footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
