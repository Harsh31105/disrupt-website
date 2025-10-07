// import React from "react";
// import { TeamMember } from "./TeamShowcaseComponents/TeamConstants";
// import MemberLine from "./TeamShowcaseComponents/MemberLine";
//
// export default function TeamShowcase() {
//   return (
//     <div className="mx-auto mb-20 ml-10 mt-28 max-w-7xl">
//       <p className="mb-4 text-3xl font-bold text-white">
//         MEET THE TEAM
//       </p>
//       {/* Adding Headers */}
//       <div className="justify-between hidden px-4 py-2 text-white md:flex">
//         <h3 className="text-lg font-bold">Name</h3>
//         <h3 className="text-lg font-bold">Title</h3>
//         <h3 className="text-lg font-bold">Team</h3>
//       </div>
//       <div className="grid grid-cols-1 gap-4">
//         {TeamMember.map((member) => (
//           <MemberLine
//             key={member.key}
//             headshot={member.headshot}
//             name={member.name}
//             position={member.position}
//             team={member.team}
//             linkedin={member.linkedin}
//             alt={member.alt}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import { TeamMember } from "./TeamShowcaseComponents/TeamConstants"
import MemberCard from "./TeamShowcaseComponents/MemberCard"

export default function TeamShowcase() {
    const teams = [...new Set(TeamMember.map((m) => m.team))]
    const [ activeTeam, setActiveTeam ] = useState(teams[0])

    const filteredMembers = TeamMember.filter((m) => m.team === activeTeam)

    return (
        <div className="mx-auto mt-28 max-w-7xl px-6 text-white">
            <h2 className="mb-6 text-3xl font-bold text-center">Meet the Team</h2>

            {/* Header Panel */}
            <div className="flex flex-wrap justify-center gap-3 mb-10">
                {teams.map((team) => (
                    <button key={team} onClick={() => setActiveTeam(team)}
                            className={`px-4 py-2 rounded-full text-sm md:text-base font-semibold transition-all duration-300 ${
                                activeTeam === team 
                                    ? "bg-indigo-600 text-white shadow-lg scale-105"
                                    : "bg-gray-700 hover:bg-gray-600"
                            }`}>
                        {team}
                    </button>
                ))}
            </div>

            {/* Member Panel */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {filteredMembers.map((member) => (
                    <MemberCard key={member.key} member={member} />
                ))}
            </div>
        </div>
    );
}