import React from "react";
import { BiWorld } from "react-icons/bi";

function Header() {
    return (
        <div className="flex justify-center items-center gap-2 p-8 bg-travel-red  text-white text-3xl ">
            <BiWorld />
            <h1 className="font-inter font-semibold tracking-tight">my travel journal.</h1>
        </div>
    );
}

export default Header;
