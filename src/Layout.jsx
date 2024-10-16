import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ButtonGradient from "./assets/svg/ButtonGradient";


const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ButtonGradient />
    </div>
  );
};

export default Layout;
