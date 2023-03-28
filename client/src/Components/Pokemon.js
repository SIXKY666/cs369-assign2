import React from "react";
import { useLoaderData } from "react-router-dom"
import "../index.css"
export default function Pokemon() {
    const pokemon = useLoaderData()
    const list = pokemon.map((item) => (
        <div className="card max-w-sm rounded shadow-lg">
            <div className="h-52 w-52 bg-slate-300">
            </div>
            <div className="m-1">
                <p className="text-lg font-bold">{item.name}</p>
                <div className="flex flex-row gap-1">
                    {item.typeList.map(type => (
                        <p>{type}</p>
                    ))}
                </div>
            </div>
        </div>
    ))
    return (
        <>
            <div className="container grid grid-cols-4 gap-4 auto-cols-max my-4">
                {list}
            </div>
        </>
    )
}
export const pokemonLoader = async () => {
    const res = await fetch("/pokemon")
    if (!res.ok) {
        throw Error("Could note fetch the pokemon");
    }
    return res
}