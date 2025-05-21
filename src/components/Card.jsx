import { FaStar } from "react-icons/fa6";
import React from "react";

const Card = (props) => {
  return (
    <div className=" w-[285px] py-7    hover:w-[285px] duration-500 ease-in-out shrink-0 grow ">
      <div className="h-[182px] rounded-2xl overflow-hidden relative">
        <img
          src={props.image}
          alt=""
          className="object-cover w-full h-full hover:scale-110 duration-200"
        />

        <p className="absolute bottom-2 left-4 text-[1.2rem] text-white font-bold">
          {props.offer}
        </p>
      </div>
      <div>
        <p className="text-[1.2rem]">{props.title}</p>
      </div>
      <div>
        <p className="flex items-center gap-0.5 text-black">
          {" "}
          <FaStar className="text-green-500" /> {props.rating} {props.minTime}-
          {props.maxTime} mins
        </p>
        <p className="text-slate-600">{props.name}</p>
        <p className="text-slate-600">{props.place}</p>
      </div>
    </div>
  );
};

export default Card;
