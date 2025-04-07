// // WorkshopCard.js
//
// import React from "react";
//
// const COLOR_CLASSES = [
//     // 给每条卡片匹配不同颜色 (或可自定义更多)
//     "bg-teal-500",
//     "bg-orange-500",
//     "bg-green-500",
//     "bg-pink-500",
//     "bg-yellow-500",
//     "bg-purple-500",
//     "bg-red-500",
// ];
//
// export default function WorkshopCard(props) {
//     // 用 index 决定颜色
//     const colorClass = COLOR_CLASSES[props.index % COLOR_CLASSES.length];
//
//     // 判断 left / right
//     const isLeft = props.position === "left";
//
//     // 容器的对齐：左侧时 "items-end" + "md:pr-8"，右侧则 "items-start" + "md:pl-8"
//     const alignmentClass = isLeft ? "md:items-end md:pr-8" : "md:items-start md:pl-8";
//
//     // 圆点的位置：left时在 `left-1/2`, 右时也在 `left-1/2`，但卡片往相应方向做 margin
//     // 注意：这个圆点是绝对定位在卡片父容器里 (见 WorkshopsChart)
//     // 这里只管圆点颜色即可
//     const dotClass = `
//     w-6 h-6 rounded-full border-4 border-black
//     ${colorClass}
//   `;
//
//     return (
//         <div className={`relative w-full flex flex-col items-center ${alignmentClass} mb-16`}>
//             {/* 圆点：在父组件里 absolute，但这里示例可直接写 */}
//             <div className="hidden md:block absolute left-1/2 -translate-x-1/2">
//                 <div className={dotClass}></div>
//             </div>
//
//             {/* 卡片本体 */}
//             <div className="bg-[#1a1a1a] text-white w-full max-w-md rounded-lg shadow-lg p-6">
//                 {/* 彩色标题栏，或顶部彩色小条 */}
//                 <div className={`h-2 w-2/3 mb-4 ${colorClass} rounded-r-full`}></div>
//
//                 {/* 日期 */}
//                 <div className="text-lg font-bold mb-1">
//                     {props.date}
//                 </div>
//                 {/* 标题 */}
//                 <div className="text-2xl font-extrabold mb-2">
//                     {props.header || `Workshop ${props.workshopNum}`}
//                 </div>
//                 {/* 时间段 */}
//                 <div className="text-md font-semibold mb-2">
//                     {props.startTime} - {props.endTime}
//                 </div>
//                 {/* 主题 */}
//                 {props.topic1 && <div className="text-sm mb-1">{props.topic1}</div>}
//                 {props.topic2 && <div className="text-sm">{props.topic2}</div>}
//             </div>
//         </div>
//     );
// }
import React from "react";

const COLOR_CLASSES = [
    {
        bg: "bg-gradient-to-r from-teal-400 to-teal-300",
        text: "text-gray-900",
        dot: "bg-teal-400",
    },
    {
        bg: "bg-gradient-to-r from-sky-400 to-sky-300",
        text: "text-gray-900",
        dot: "bg-sky-400",
    },
    {
        bg: "bg-gradient-to-r from-green-400 to-green-300",
        text: "text-gray-900",
        dot: "bg-green-400",
    },
    {
        bg: "bg-gradient-to-r from-lime-300 to-lime-200",
        text: "text-gray-900",
        dot: "bg-lime-300",
    },
];

export default function WorkshopCard(props) {
    const colorSet = COLOR_CLASSES[props.index % COLOR_CLASSES.length];
    const isLeft = props.position === "left";

    return (
        <div className="relative flex flex-col w-full mb-10 sm:mb-14">
            {/*

      */}
            <div
                className="hidden sm:flex absolute top-0 flex-col items-center"
                style={{
                    left: "50%",
                }}
            >
                <div className="w-[2px] h-full bg-gray-500"></div>
                <div
                    className={`w-5 h-5 rounded-full ${colorSet.dot} mt-0 -mb-2`}
                ></div>
            </div>

            {/*

      */}
            <div
                className={`
          relative
          sm:max-w-[80%] md:max-w-[60%] lg:max-w-[45%]
          w-[90%] mx-auto
          py-4 px-6 rounded-xl shadow-lg
          transition-all duration-300 transform hover:scale-[1.02]
          ${colorSet.bg} ${colorSet.text}
          flex flex-col
          ${isLeft ? "sm:self-end" : "sm:self-start"}
          ${isLeft ? "sm:items-end sm:text-right" : "sm:items-start sm:text-left"}
        `}
                style={{
                    marginLeft: isLeft ? "auto" : "0",
                    marginRight: isLeft ? "0" : "auto",
                }}
            >
                <div className="text-xl sm:text-2xl font-bold mb-2">
                    {props.date}
                </div>

                <div className="text-lg sm:text-xl font-semibold mb-1">
                    {props.header || `Workshop ${props.workshopNum}`}
                </div>

                <div className="text-sm sm:text-base mb-3 font-medium">
                    {props.startTime} - {props.endTime}
                </div>

                {props.topic1 && (
                    <div className="text-sm sm:text-base mb-1">
                        {props.topic1}
                    </div>
                )}
                {props.topic2 && (
                    <div className="text-sm sm:text-base">
                        {props.topic2}
                    </div>
                )}
            </div>
        </div>
    );
}
