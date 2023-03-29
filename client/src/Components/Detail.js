import React from "react";
import { useLoaderData } from "react-router-dom";
const Detail = () => {
  const pokemon = useLoaderData();
  return (
    <>
    {/* header */}
      <div className="flex flex-row gap-2 my-4">
        <p className="text-4xl font-bold">{pokemon.name}</p>
        <p className="text-4xl font-bold text-gray-400">#{pokemon.id}</p>
      </div>
      {/* detail */}
      <div className="flex flex-row">
        <div className="w-96 h-96 bg-gray-100"></div>
        <div className="flex flex-col">
          <div>
            <p>Type</p>
            {
              pokemon.typeList.map((type) => (
                <p>{type}</p>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};
export const detailLoader = async ({ params }) => {
  const id = params.id;
  const res = fetch("/pokemon/" + id);
  if (!(await res).ok) {
    throw new Error("Can't find the pokemon");
  }
  return res;
};
export default Detail;
