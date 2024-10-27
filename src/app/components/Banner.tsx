import React from "react";

export default function Banner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-grey-700 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://img.freepik.com/free-photo/exploding-burger-with-vegetables-melted-cheese-black-background-generative-ai_157027-1734.jpg?w=740&t=st=1728948444~exp=1728949044~hmac=a2aa4d8e900ed648e13cbb65ce45baca5495dd5b60ae791ed4ce81fd7fcbb07d"
          alt="Delicious Burger Banner"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 container ms-auto flex flex-col justify-center items-center text-center">
        <h2 className="text-white sm:text-5xl font-bold mb-4">
          Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop Now for Exclusive Burger Discount!
        </p>

        <button
          type="button"
          className="bg-yellow-500 text-white text-sm font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
        >
          Exciting Deals Launch at 12PM!
        </button>
      </div>
    </div>
  );
}
