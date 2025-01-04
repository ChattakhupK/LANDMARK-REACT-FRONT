import Navbar from "@/components/Navbar/Navbar";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <Outlet />
    </div>
  );
};
export default Layout;
