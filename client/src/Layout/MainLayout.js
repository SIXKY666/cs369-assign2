import { NavLink, Outlet } from "react-router-dom";
import "../App.css"
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div className="w-full">
            <Navbar/>
            <div className="flex w-full justify-center">
                <Outlet />
            </div>
            <footer></footer>
        </div>
    );
};

export default MainLayout;