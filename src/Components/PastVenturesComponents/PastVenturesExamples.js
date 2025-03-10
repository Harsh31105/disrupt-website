import { CARD } from "./PastVenturesConstants";
import PastVenturesGallery from "./PastVentureCard";
import React from "react";

export default function PastVenturesExamples() {
    return (
        <div className="flex flex-col justify-center items-center border-b border-solid border-b-gray-400">
            <PastVenturesGallery />
        </div>
    );
}
