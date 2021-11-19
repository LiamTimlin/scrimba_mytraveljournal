import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { motion } from "framer-motion";

function Card({ location }) {
    return (
        <motion.div className="max-w-4xl px-0 p-10 flex gap-10 flex-wrap sm:flex-nowrap justify-center ">
            <img className="object-contain h-full w-48   rounded-lg " src={location.imageUrl} alt="" />
            <div className="flex flex-col justify-center px-10">
                <div className="flex items-end gap-5">
                    <div className="flex items-center">
                        <IoLocationSharp className="text-red-600" />
                        <p className="uppercase font-normal tracking-widest text-gray-800">{location.location}</p>
                    </div>

                    <a className="text-gray-500 underline hover:text-gray-900 duration-150 ease-in-out" href={location.googleMapsUrl}>
                        View on Google Maps
                    </a>
                </div>
                <h1 className="text-5xl font-bold mt-2 mb-8">{location.title}</h1>
                <div className="flex flex-col gap-3">
                    <p className="font-semibold ">
                        {location.startDate} - {location.endDate}
                    </p>
                    <p>{location.description}</p>
                </div>
            </div>
        </motion.div>
    );
}

export default Card;

//whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
