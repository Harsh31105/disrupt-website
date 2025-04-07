import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { CARD } from "./PastVenturesConstants";

export default function PastVenturesGallery() {
    const [openYear, setOpenYear] = useState(null);

    const toggleYear = (year) => {
        setOpenYear(openYear === year ? null : year);
    };

    const uniqueYears = [...new Set(CARD.map((card) => card.year))];

    return (
        <div className="w-full max-w-screen-lg mx-auto mt-6">
            {uniqueYears.map((year, index) => {
                const projects = CARD.filter((card) => card.year === year);
                return (
                    <div key={index} className="mb-6">
                        <button
                            onClick={() => toggleYear(year)}
                            className={`w-full flex flex-col items-start bg-gradient-to-r from-gray-700 to-gray-800 text-white py-4 px-6 text-2xl font-semibold rounded-lg
                            hover:bg-gray-600 transition shadow-md transform hover:scale-105 duration-300 ease-in-out`}
                        >
                            <div className="flex justify-between w-full items-center">
                                <span>{year}</span>
                                <span className="text-lg">{openYear === year ? "▲" : "▼"}</span>
                            </div>
                            <p className="text-sm text-gray-300 mt-1">
                                {projects.slice(0, 3).map((proj) => proj.header).join(" • ")}
                            </p>
                        </button>

                        {openYear === year && (
                            <div className="mt-4 p-6 bg-gray-900 rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    {projects.map((card) => (
                                        <div key={card.key} className="text-white text-center relative bg-gray-800 bg-opacity-80 p-4 rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 min-h-[220px] flex flex-col justify-between">

                                            <div className="relative w-full h-[250px] overflow-hidden rounded-md flex items-center justify-center bg-gray-900">
                                                {card.type === "figma" ? (
                                                    <iframe
                                                        src={card.figmaEmbedLink}
                                                        className="w-full h-full rounded-md border-none"
                                                        allowFullScreen
                                                    ></iframe>
                                                ) : card.type === "googleSlides" ? (
                                                    <iframe
                                                        src={card.googleSlidesEmbedLink}
                                                        className="w-full h-full rounded-md border-none"
                                                        allowFullScreen
                                                    ></iframe>
                                                ) : card.type === "canva" ? (
                                                    <iframe
                                                        src={card.canvaEmbedLink}
                                                        className="w-full h-full rounded-md border-none"
                                                        allowFullScreen
                                                    ></iframe>
                                                ) : (
                                                    <iframe
                                                        src={card.pdfEmbedLink}
                                                        className="w-full h-full rounded-md border-none"
                                                        allowFullScreen
                                                    ></iframe>
                                                )}
                                            </div>

                                            {card.type !== "pdf" && (
                                                <a
                                                    href={card.type === "figma" ? card.figmaDeckLink
                                                        : card.type === "googleSlides" ? card.googleSlidesFullLink
                                                            : card.type === "canva" ? card.canvaFullLink
                                                                : ""}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="absolute top-2 right-2 bg-white px-3 py-1 text-black rounded-md shadow-md text-sm hover:bg-gray-200"
                                                >
                                                    View Fullscreen
                                                </a>
                                            )}

                                            <div className="mt-3">
                                                {/*<h3 className="text-xl font-bold">{card.header}</h3>*/}
                                                <p className="text-gray-300 text-sm">{card.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}
