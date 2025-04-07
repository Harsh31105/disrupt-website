import React from "react";
import { newsletter } from "./NewsLetterItems/newsLetterConstants";
import { NavLink } from "react-router-dom";

export default function Newsletters() {
    return (
        <div className="border-b border-gray-400">
            <div className="pl-4 pt-4 pb-2 text-xs text-white font-bold">
                <h6>/ NEWSLETTERS</h6>
            </div>
            <ul className="divide-y divide-gray-800">
                {newsletter.map((item) => (
                    <li key={item.description} className="flex flex-col md:flex-row justify-between gap-4 p-4">
                        <img
                            className="w-[350px] h-[200px] bg-white flex items-center justify-center"
                            src={item.img}
                            alt=""
                        />
                        <div className="flex flex-col justify-between">
                            <div>
                                <p className="text-2xl md:text-4xl font-bold leading-tight text-white mb-2">
                                    {item.name}
                                </p>
                                <p className="text-sm italic text-white mb-3">
                                    {item.date}
                                </p>
                                <p className="text-sm leading-tight text-white mb-3">
                                    {item.description}
                                </p>
                                <div className="flex items-center">
                                    {/*<img className="w-6 h-6 rounded-full mr-2" src={item.authorHeadshot} alt="" />*/}
                                    <p className="text-white font-semibold">{item.author}</p>
                                </div>

                            </div>
                            <NavLink
                                to={item.navLink}
                                className="text-white border border-solid py-2 px-6 rounded-md mt-4 self-start md:self-end"
                            >
                                Read More
                            </NavLink>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
