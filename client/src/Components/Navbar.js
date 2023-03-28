import React from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <nav className="flex min-w-max h-20 bg-slate-100">
                <ul className="flex flex-row justify-center items-center ">
                    <li className="text-stone-900 mx-4"><NavLink to="/">Home</NavLink></li>
                    <li className="text-stone-900 mx-4"><NavLink to="/Pokemon">Pokemon</NavLink></li>
                </ul>
            </nav>
        </>
    )
}