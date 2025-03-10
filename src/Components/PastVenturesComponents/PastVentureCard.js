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
        <div className="w-full max-w-screen-lg mx-auto mt-[-30px]">
            {uniqueYears.map((year, index) => (
                <div key={index} className="mb-4">
                    <button
                        onClick={() => toggleYear(year)}
                        className="w-full text-left bg-gray-800 text-white py-3 px-5 text-2xl font-semibold rounded-lg
                      hover:bg-gray-700 transition shadow-md"
                    >
                        {year}
                    </button>

                    {openYear === year && (
                        <div className="mt-4 p-6 bg-gray-900 rounded-lg shadow-lg transform -translate-y-5">
                            <Swiper
                                modules={[Navigation, Pagination, Scrollbar]}
                                navigation={true}
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                spaceBetween={30}
                                slidesPerView={3}
                                breakpoints={{
                                    768: { slidesPerView: 2 },
                                    1024: { slidesPerView: 3 },
                                }}
                                loop={false}
                                className="w-full"
                            >
                                {CARD.filter((card) => card.year === year).map((card) => (
                                    <SwiperSlide key={card.key}>
                                        <div className="text-white text-center relative">
                                            {/* Switching between Figma / Google Slides / PDF */}
                                            {card.type === "figma" ? (
                                                <iframe
                                                    src={card.figmaEmbedLink}
                                                    className="w-full h-[300px] rounded-md border-none"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : card.type === "googleSlides" ? (
                                                <iframe
                                                    src={card.googleSlidesEmbedLink}
                                                    className="w-full h-[300px] rounded-md border-none"
                                                    allowFullScreen
                                                ></iframe>
                                            ) : (
                                                <iframe
                                                    src={`https://drive.google.com/file/d/${card.pdfEmbedLink.split('/d/')[1].split('/')[0]}/preview`} // ✅ 处理 Google Drive PDF 预览
                                                    className="w-full h-[300px] rounded-md border-none"
                                                    allowFullScreen
                                                ></iframe>
                                            )}

                                            <a
                                                href={card.type === "figma" ? card.figmaDeckLink : card.type === "googleSlides" ? card.googleSlidesFullLink : card.pdfFullLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute top-2 right-2 bg-white px-3 py-1 text-black rounded-md shadow-md text-sm hover:bg-gray-200"
                                            >
                                                View Fullscreen
                                            </a>

                                            <h3 className="mt-3 text-xl font-bold">{card.header}</h3>
                                            <p className="text-gray-300">{card.description}</p>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}




