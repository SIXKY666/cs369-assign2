import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import pokeball from "../images/pokeball_800x600.gif";
export default function Home() {
  return (
    <>
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center p-6 w-2/5">
            <div className="flex mb-4">
              <p className="text-4xl font-bold">
                Welcome to the world of Pokémon!
              </p>
            </div>
            <div>
              <p className="text-2xl line-clamp-3">
                Explore our extensive database of creatures, get the latest news
                and updates connect with other fans, and join our community
                today!
              </p>
            </div>
            <div className="my-4">
              <button className="text-xl px-2 flex-shrink-0 bg-orange-500  hover:bg-orange-500 border-orange-500 hover:border-orange-500 border-4 text-white rounded" type="button">
              <Link to='/pokemon'>Get Started</Link>
              </button>
            </div>
          </div>
          <div className="flex w-3/5 items-end ">
            <img className="rounded-full" src={pokeball} alt="pokeball" />
          </div>
        </div>
      </div>
    </>
  );
}
