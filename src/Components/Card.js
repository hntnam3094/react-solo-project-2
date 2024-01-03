import React from "react";

export default function Card(props) {
  return (
    <div className="flex mx-5 items-center my-5">
      <div>
        <img className="w-[450px] rounded-md" src={`./images/${props.item.image}`} />
      </div>
      <div className="ml-[40px]">
        <div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="red"
              className="bi bi-geo-alt-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
            </svg>
            <p className="ml-1 uppercase tracking-widest font-medium">{props.item.country}</p>
            <a className="ml-5 underline text-gray-400">View on Google Maps</a>
          </div>
          <h1 className="text-3xl font-bold mb-4">{props.item.name}</h1>
          <b className="font-bold">{props.item.date}</b>
          <p className="mt-3 tracking-wide">
          {props.item.desciption}
          </p>
        </div>
      </div>
    </div>
  );
}
