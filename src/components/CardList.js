import React from "react";
import locations from "../data";
import { v4 as uuidv4 } from "uuid";
import Card from "./Card";

function CardList() {
    return (
        <div className="flex flex-col items-center divide-y divide-gray-200 ">
            {locations.map((location) => (
                <Card location={location} key={uuidv4()} />
            ))}
        </div>
    );
}

export default CardList;
