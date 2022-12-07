import React, { useState } from "react";

const ImageCarousel = () => {
  const [currentImage, setCurrentImage] = useState("./1.png");
  return (
    <div>
      <div className="border border-gray-100 rounded-md object-cover">
        <img className="w-full h-full object-cover" src={currentImage}></img>
      </div>
      <div className="mt-10 grid gap-1 grid-cols-3">
        <button>
          <img
            className={`h-28 object-cover border border-gray-200 rounded-md hover:border-gray-400 focus:border-gray-400 ${
              currentImage === "./1.png" && "border-gray-700"
            }`}
            src="./1.png"
            onClick={() => setCurrentImage("./1.png")}
            alt="head-black_front"
          ></img>
        </button>
        <button>
          <img
            className={`h-28 object-cover border border-gray-200 rounded-md hover:border-gray-400 focus:border-gray-400 ${
              currentImage === "./2.png" && "border-gray-700"
            }`}
            src="./2.png"
            onClick={() => setCurrentImage("./2.png")}
            alt="head-black_front"
          ></img>
        </button>
        <button>
          <img
            className={`h-28 object-cover border border-gray-200 rounded-md hover:border-gray-400 focus:border-gray-400 ${
              currentImage === "./3.png" && "border-gray-700"
            }`}
            src="./3.png"
            onClick={() => setCurrentImage("./3.png")}
            alt="head-black_front"
          ></img>
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
