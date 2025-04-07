import React from "react";
import { NavLink } from "react-router-dom";
import { newsletter } from "./NewsLetterItems/newsLetterConstants";

function FeaturedCard(props) {
    return (
        <div className="flex flex-col items-center max-w-md px-4 mx-auto md:px-10">
            <img
                // className="w-full pb-2 rounded-sm"
                className="w-[350px] h-[200px] bg-white flex items-center justify-center"
                src={props.image}
                alt={props.alt}
            />
            <div className="flex flex-col items-center justify-between w-full mt-2 md:flex-row">
                <h3
                    className="text-lg font-bold text-white md:text-xl"
                    style={{fontFamily: "Faucet"}}
                >
                    {props.header}
                </h3>
                <NavLink
                    to={props.navLink}
                    className="px-4 py-2 mt-2 text-sm text-white border border-solid rounded-md md:mt-0 md:text-base"
                    style={{fontFamily: "Usual-Light"}}
                >
                    Read More
                </NavLink>
            </div>
        </div>
    );
}

export default function FeaturedNews() {
    const featuredNews = newsletter.slice(0, 3);

    return (
        <div className="border-b border-gray-400">
            <div className="pl-4 pt-4 pb-2 text-xs text-white font-bold">
                <h6>/ FEATURED</h6>
            </div>
            <div className="flex flex-col items-center justify-center md:flex-row md:justify-around md:items-stretch">
                {featuredNews.map((card) => (
                    <FeaturedCard
                        key={card.key}
                        image={card.img}
                        header={card.name}
                        alt={card.alt}
                        navLink={card.navLink}
                    />
                ))}
            </div>
        </div>
    );
}
