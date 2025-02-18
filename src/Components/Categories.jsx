import React, { act, use, useState } from "react";

export default function Categories({ categories }) {
  const [mainCategorie, setMainCategorie] = useState("all");

  return (
    <div className="flex justify-center items-center gap-3">
      {categories.map((cat, index) => {
        return (
          <button
            key={index}
            className={`text-yellow-700 font-semibold transition-all duration-250 delay-75 hover:bg-yellow-700 p-2 w-20 rounded-xl hover:text-white ${
              cat === mainCategorie ? "  text-slate-50  bg-yellow-700" : "bg-white"
            }`}
          onClick={()=>{setMainCategorie(cat)}} >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
