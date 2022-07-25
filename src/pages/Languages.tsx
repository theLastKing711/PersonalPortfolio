import React from "react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Languages = () => {
  return (
    <div className="h-screen py-32 overflow-hidden">
      <div className="flex flex-col items-center gap-40 h-full md:flex-row justify-center">
        <div>
          <h1 className="text-3xl md:text-7xl animate-fadeInLeft mb-8 ">
            English
          </h1>
          <ul className="space-y-4 p-0">
            <li className="ml-3 flex items-center gap-3">
              <h3 className="text-xl md:text-2xl animate-fadeInLeft">
                Reading:
              </h3>
              <BsStarFill className="text-xl animate-fadeInTop1" />
              <BsStarFill className="text-xl animate-fadeInTop2" />
              <BsStarFill className="text-xl animate-fadeInTop3" />
              <BsStarFill className="text-xl animate-fadeInTop4" />
              <BsStarFill className="text-xl animate-fadeInTop5" />
            </li>
            <li className="ml-3 flex items-center gap-3 ">
              <h3 className="text-xl md:text-2xl animate-fadeInLeft">
                Listening
              </h3>
              <BsStarFill className="text-xl animate-fadeInTop1" />
              <BsStarFill className="text-xl animate-fadeInTop2" />
              <BsStarFill className="text-xl animate-fadeInTop3" />
              <BsStarFill className="text-xl animate-fadeInTop4" />
              <BsStar className="text-2xl animate-fadeInTop4" />
            </li>
            <li className="ml-3 flex items-center gap-3">
              <h3 className="text-xl md:text-2xl animate-fadeInLeft">
                Speaking:
              </h3>
              <BsStarFill className="text-xl animate-fadeInTop1" />
              <BsStarFill className="text-xl animate-fadeInTop2" />
              <BsStarFill className="text-xl animate-fadeInTop3" />
              <BsStarFill className="text-xl animate-fadeInTop4" />
              <BsStar className="text-2xl animate-fadeInTop4" />
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl md:text-7xl animate-fadeInRight mb-8 ">
            Arabic
          </h1>
          <ul className="space-y-4 p-0 ">
            <li className="ml-3 flex items-center gap-3">
              <h3 className="text-xl md:text-2xl animate-fadeInRight">
                Reading:
              </h3>
              <BsStarFill className="text-xl animate-fadeInTop1" />
              <BsStarFill className="text-xl animate-fadeInTop2" />
              <BsStarFill className="text-xl animate-fadeInTop3" />
              <BsStarFill className="text-xl animate-fadeInTop4" />
              <BsStarFill className="text-xl animate-fadeInTop5" />
            </li>
            <li className="ml-3 flex items-center gap-3">
              <h3 className="text-xl md:text-2xl animate-fadeInRight">
                Listening:
              </h3>
              <BsStarFill className="text-xl animate-fadeInTop1" />
              <BsStarFill className="text-xl animate-fadeInTop2" />
              <BsStarFill className="text-xl animate-fadeInTop3" />
              <BsStarFill className="text-xl animate-fadeInTop4" />
              <BsStarFill className="text-xl animate-fadeInTop5" />
            </li>
            <li className="ml-3 flex items-center gap-3">
              <h3 className="text-xl md:text-2xl animate-fadeInRight">
                Speaking:
              </h3>
              <BsStarFill className="text-xl animate-fadeInTop1" />
              <BsStarFill className="text-xl animate-fadeInTop2" />
              <BsStarFill className="text-xl animate-fadeInTop3" />
              <BsStarFill className="text-xl animate-fadeInTop4" />
              <BsStarFill className="text-xl animate-fadeInTop5" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Languages;
