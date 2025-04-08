import React from "react";
import { WORKSHOP_CARDS } from "./WorkshopConstants";
import WorkshopCard from "./WorkshopCard";
import chanceToWinStar from "../../img/chanceToWinStar.svg";
import PastVenturesGallery from "../PastVenturesComponents/PastVentureCard";

export default function WorkshopsChart() {
    return (
        <div className="flex flex-col items-center w-full pb-10 px-4 bg-black">
            <p className="mb-8 text-3xl font-bold text-center text-white sm:mb-12 sm:text-5xl">
                WORKSHOP SCHEDULE
            </p>

            <div className="relative w-full max-w-6xl mx-auto">
                {WORKSHOP_CARDS.map((card, index) => {
                    const position = index % 2 === 0 ? "left" : "right";
                    return (
                        <WorkshopCard
                            key={card.key}
                            index={index}
                            position={position}
                            header={card.header}
                            workshopNum={card.workshopNum}
                            date={card.date}
                            startTime={card.startTime}
                            endTime={card.endTime}
                            topic1={card.topic1}
                            topic2={card.topic2}
                        />
                    );
                })}
            </div>

            {/* WINNING STAR SECTION */}
            <div className="flex items-center justify-center mt-12">
                <p className="text-center text-4xl md:text-5xl lg:text-6xl font-bold text-white mr-6 md:mr-12 lg:mr-24">
                    THE CHANCE TO WIN
                </p>
                <img
                    src={chanceToWinStar}
                    alt="star"
                    className="items-center h-12 md:h-16 lg:h-20"
                />
            </div>

            {/* ✅ NEW: connector section */}
            <div className="w-full py-12 bg-gradient-to-b from-black to-gray-900 flex flex-col items-center text-center px-6">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-4">Curious about past winning ideas?</p>
                <p className="text-white max-w-3xl text-base sm:text-lg font-usual-regular">
                    Take a look at what our past ventures have accomplished — innovative projects that made it all the way to the finish line.
                </p>
            </div>

            {/* PAST VENTURES */}
            <div className="w-full bg-black py-16">
                <p className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">
                    PAST VENTURES
                </p>
                <PastVenturesGallery />
            </div>
        </div>

);
}
