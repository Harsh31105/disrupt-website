import React from "react";

export default function ConsultingBenefitCard({ header, img, alt, description }) {
  return (
      <div className="flex justify-center w-full px-5 pt-12">
        <div className="flex flex-col bg-black border border-white rounded-2xl max-w-xl w-full p-8">
          <p className="text-3xl font-black text-white font-usual-regular mb-6">
            {header}
          </p>
          <img className="self-center w-64" src={img} alt={alt} />
          <p className="pt-8 text-lg text-white font-usual-regular">
            {description}
          </p>
        </div>
      </div>
  );
}