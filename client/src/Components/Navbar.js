import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../pokeball.png"
export default function Navbar() {
    return (
        <>
            <nav className="flex min-w-max h-20 bg-slate-100 shadow-md">
                <ul className="flex flex-row justify-center items-center ">
                    <li className="flex"><img className="w-9 h-9 m-2" src={logo}></img><NavLink to="/"/></li>
                    <li className=" text-stone-900 mx-4 "><NavLink className="text-lg font-bold hover:text-red-500 " to="/">Home</NavLink></li>
                    <li className=" text-stone-900 mx-4 "><NavLink className="text-lg font-bold hover:text-red-500 " to="/Pokemon">Pokemon</NavLink></li>
                </ul>
            </nav>
        </>
    )
}