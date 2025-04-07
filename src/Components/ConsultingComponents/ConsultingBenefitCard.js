import React from "react";

export default function ConsultingBenefitCard({ header, img, alt, description }) {
  return (
      <div className="w-full px-4 sm:px-6 md:px-0">
        <div className="flex flex-col bg-black border border-white rounded-2xl max-w-md mx-auto p-6 md:p-8 shadow-lg hover:scale-[1.02] transition-transform duration-300">
          <p className="text-2xl md:text-3xl font-black text-white font-usual-regular mb-4 text-center">
            {header}
          </p>
          <img className="mx-auto w-3/4 md:w-64 aspect-[4/3] object-contain" src={img} alt={alt} />
          <p className="pt-6 text-base md:text-lg text-white font-usual-regular text-center">
            {description}
          </p>
        </div>
      </div>
  );
}
