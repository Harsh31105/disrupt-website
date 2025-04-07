export default function ConsultingBenefitCard({ header, img, alt, description }) {
  return (
      <div className="w-full px-4 sm:px-6 md:px-0">
        <div className="flex flex-col bg-black border border-white rounded-2xl max-w-md mx-auto p-6 md:p-8 shadow-lg hover:scale-[1.02] transition-transform duration-300 h-full">
          <p className="text-2xl md:text-3xl font-black text-white font-usual-regular mb-4 text-center">
            {header}
          </p>
          <div className="flex justify-center items-center flex-grow">
            <img className="w-40 h-40 object-cover rounded-full" src={img} alt={alt} />
          </div>
          <p className="pt-6 text-base md:text-lg text-white font-usual-regular text-center">
            {description}
          </p>
        </div>
      </div>
  );
}
