import React, { useEffect, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const Category = () => {
  const [slide, setSlide] = useState(0);

  const dates = [
    {
      image: "images/North_Indian_4.jpeg",
      path: "north-indian",
    },
    {
      image: "images/Pizza.jpeg",
      path: "pizza",
    },
    {
      image: "images/Noodles.jpeg",
      path: "noodles",
    },
    {
      image: "images/Pasta.jpeg",
      path: "pasta",
    },
    {
      image: "images/Paratha.jpeg",
      path: "paratha",
    },
    {
      image: "images/Biryani_2.jpeg",
      path: "biryani",
    },
    {
      image: "images/Burger.jpeg",
      path: "burger",
    },
    {
      image: "images/Cakes.jpeg",
      path: "cakes",
    },
    {
      image: "images/Chinese.jpeg",
      path: "chinese",
    },
    {
      image: "images/Chole_Bature.jpeg",
      path: "chole-bature",
    },
    {
      image: "images/Dosa.jpeg",
      path: "dost",
    },
    {
      image: "images/Gulab_Jamun.jpeg",
      path: "gulab-jamun",
    },
    {
      image: "images/Ice_Creams.jpeg",
      path: "ice-creams",
    },
    {
      image: "images/Idli.jpeg",
      path: "idli",
    },
    {
      image: "images/Khichdi.jpeg",
      path: "khichdi",
    },
    {
      image: "images/Poori.jpeg",
      path: "poori",
    },
    {
      image: "images/Pure_Veg.jpeg",
      path: "pure-veg",
    },
    {
      image: "images/Rolls.jpeg",
      path: "rolls",
    },
    {
      image: "images/Salad.jpeg",
      path: "salad",
    },
    {
      image: "images/South_Indian_4.jpeg",
      path: "south-indian",
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto py-3">
      <div className="flex items-center justify-between ">
        <div className="text-[1.3rem] font-semibold ml-1">What's on your mind</div>
        <div className="flex">
          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2 flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (slide != 0) {
                setSlide(slide - 3);
              }
            }}
          >
            <FaArrowLeftLong />
          </div>

          <div
            className="w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-2  flex items-center justify-center cursor-pointer"
            onClick={() => {
              if (dates.length - 8 == slide) {
                return false;
              }
              setSlide(slide + 3);
            }}
          >
            <FaArrowRightLong />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {dates.map((data, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slide * 100}%)`,
              }}
              key={index}
              className="w-38 shrink-0 duration-500"
            >
              <img src={data.image} alt="" />
            </div>
          );
        })}
      </div>

    <hr className="mt-8 border-t-2 border-gray-300" />

    </div>
  );
};

export default Category;
