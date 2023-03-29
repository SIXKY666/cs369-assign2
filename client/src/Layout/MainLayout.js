import { NavLink, Outlet } from "react-router-dom";
import "../App.css"
import Navbar from "../Components/Navbar";

const MainLayout = () => {
    return (
        <div className="w-full">
            <Navbar/>
            <div className="flex flex-col w-full items-center justify-center mb-10">
                <Outlet />
            </div>
            <footer></footer>
        </div>
    );
};

export default MainLayout;