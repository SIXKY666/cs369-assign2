import { Outlet, useNavigation } from "react-router-dom";
import "../App.css";
import Navbar from "../Components/Navbar";
import Loader from "../Components/Loader";

const MainLayout = () => {
  const navigation = useNavigation();
  return (
    <div className="w-full h-full bg-snow">
      <Navbar />
      <div className="flex flex-col w-full h-full">
        {navigation.state === "loading" ? <Loader/> : ""}
        <Outlet />
      </div>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
