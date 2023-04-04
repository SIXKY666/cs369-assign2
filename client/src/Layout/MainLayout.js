import { Outlet, useNavigation } from "react-router-dom";
import "../App.css";
import Navbar from "../Components/Navbar";
import Loader from "../Components/Loader";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="w-full">
      <Navbar />
      <div className="flex flex-col w-full items-center justify-center mb-10">
        {navigation.state === "loading" ? <Loader/> : ""} <Outlet />
        <Outlet />
      </div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
