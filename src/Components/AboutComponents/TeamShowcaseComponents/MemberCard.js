import React from "react";

export default function MemberCard({ member }) {
    return (
        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
           className="flex flex-col items-center p-4 transition-transform duration-300 bg-gray-800
                        rounded-xl hover:scale-105 hover:bg-gray-700">
            <div className="w-24 h-24 overflow-hidden rounded-full md:w-32 md:h-32">
                <img src={member.headshot} alt={member.alt}
                     className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"/>
            </div>
            <h3 className="mt-3 text-base font-semibold text-center text-white md:text-lg">
                {member.name}
            </h3>
            <p className="text-sm text-gray-300 text-center">{member.position}</p>
        </a>
    );
}