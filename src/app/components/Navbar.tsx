import React from "react";
import { FaHamburger } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="py-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-700">
            <div className="flex justify-between items-center">
              <div className="flex justify-items-center items-center gap-2">
                {/*Logo Burger*/}
                <FaHamburger className="w-6 h-6 text-yellow-400 hover:text-cyan-400" />
                {/*Search Icon*/}

                <div style={{ position: "relative" }}>
                  <input
                    className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search for your favourite burger from menu."
                  />

                  <FaSearch className="w-5 h-5 text-black absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>

<div className="flex justify-center items-center gap-2">

<FaBolt className="w-5 h-5 text-amber-400 hidden lg:block md:block"/>
<p className="text-sm text-white hidden lg:block md:block">Order now and get it with 
<span className="text-amber-400"> 15 minutes!</span>
</p>


{/*Cart Icon*/}
<FaCartShopping className="w-8 h-8 text-sky-400 rounded-full p-1 relative hover:text-amber-400"/>
</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
