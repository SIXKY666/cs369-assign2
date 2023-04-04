import React from "react";
import { NavLink } from "react-router-dom";
import "../index.css"
import logo from "../pokeball.png"
export default function Navbar() {
    return (
        <>
            <nav className="flex min-w-max h-20 bg-slate-100 shadow-md">
                <ul className="flex flex-row justify-center items-center ">
                    <li className="flex"><img className="w-auto h-11 m-2 shake-lr" src={logo} alt="pokeball"></img><NavLink to="/"/></li>
                    <li className=" text-stone-900 mx-4 "><NavLink className="text-lg font-bold hover:text-red-500 " to="/">Home</NavLink></li>
                    <li className=" text-stone-900 mx-4 "><NavLink className="text-lg font-bold hover:text-red-500 " to="/Pokemon">Pokemon</NavLink></li>
                </ul>
            </nav>
        </>
    )
}