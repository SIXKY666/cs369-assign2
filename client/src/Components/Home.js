import React from "react";
import { Link } from "react-router-dom";
import "../index.css";
import pokeball from "../images/pokeball_open.png";
import pikachu from "../images/pikachu.png";
export default function Home() {
  return (
    <>
      <div className="flex flex-row w-full h-full">
        <div className="flex flex-row">
          <div className="flex flex-col justify-center ml-4 p-6 w-2/5">
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
              <button className="text-xl px-2 flex-shrink-0 bg-orange-500  hover:bg-orange-300 border-orange-500 hover:border-orange-300 border-4 text-white rounded" type="button">
                <Link to='/pokemon'>Get Started</Link>
              </button>
            </div>
          </div>
          <div className="flex w-3/5 justify-center border rounded-full bg-orange-500">
            <div className="flex items-center">
              <img className="h-96 w-auto scale-up-center" src={pikachu} alt="Pikachu" />
            </div>
            <div className="flex items-center">
              <img className="flex justify-center h-44 w-auto shake-lr" src={pokeball} alt="pokeball" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
