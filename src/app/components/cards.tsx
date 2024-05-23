// app/dashboard/ProjectCard.js

import Link from "next/link";

function Cards({ data }) {
  return (
    <div className="max-w-sm max-h-30 rounded overflow-hidden shadow-lg p-4 m-2 bg-white border-2 border-gray">
      <div className="text-black font-bold text-xl mb-2">{data.ticker}</div>
      <p className="text-gray-700 text-base">${data.change_percentage}</p>
      <p className="text-green-500 text-base">+{data.price}</p>
      <Link href={`/dashboard/${data.ticker}`}></Link>
    </div>
  );
}

export default Cards;
