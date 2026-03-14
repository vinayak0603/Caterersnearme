'use client';

import { Star, MapPin, Utensils } from 'lucide-react';

/**
 * CatererCard Component
 * Displays individual caterer details in a styled card.
 */
const CatererCard = ({ caterer }) => {
  return (
    <div className="bg-white rounded-[1.5rem] border-4 border-[#e2b157]/40 overflow-hidden hover:shadow-[0_0_20px_rgba(226,177,87,0.3)] transition-all duration-300 flex flex-col h-full group">

      {/* Featured Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={caterer.image}
          alt={caterer.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>

      {/* Card Header: Name and Rating */}
      <div className="p-5 pb-2 flex justify-between items-start">
        <h3 className="text-xl font-bold text-[#1a2b6d] line-clamp-1 group-hover:text-blue-700 transition-colors">
          {caterer.name}
        </h3>

        {/* Rating Badge */}
        <div className="flex items-center gap-1.5 bg-[#fff9eb] px-3 py-1.5 rounded-full border border-[#e2b157]/30 shadow-sm shrink-0">
          <Star size={14} className="fill-[#e2b157] text-[#e2b157]" />
          <span className="text-[#e2b157] font-bold text-sm leading-none">
            {caterer.rating.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="px-5 pb-6 flex-1 flex flex-col gap-5">

        {/* Location Row */}
        <div className="flex items-center gap-2 text-gray-500">
          <MapPin size={18} strokeWidth={1.5} />
          <span className="text-sm font-medium line-clamp-1">{caterer.location}</span>
        </div>

        {/* Price Row */}
        <div className="flex items-center gap-2">
          <span className="text-2xl font-black text-[#1a2b6d] tracking-tight">
            ${caterer.pricePerPlate}
          </span>
          <span className="text-gray-400 font-medium text-sm">/ plate</span>
        </div>

        {/* Cuisine Tags Row */}
        <div className="flex items-start gap-2 pt-2">
          <div className="bg-gray-50 p-1.5 rounded-lg text-gray-400 shrink-0">
            <Utensils size={18} strokeWidth={1.5} />
          </div>
          <div className="flex flex-wrap gap-2 pt-1">
            {caterer.cuisines.map((cuisine, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-600 text-xs px-3 py-1.5 rounded-lg font-bold tracking-tight"
              >
                {cuisine}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CatererCard;
