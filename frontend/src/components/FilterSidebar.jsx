'use client';

/**
 * FilterSidebar Component
 * Left-side filter panel for the caterers listing.
 */
const FilterSidebar = ({ maxPrice, setMaxPrice }) => {
  return (
    <aside className="w-full lg:w-72 shrink-0">
      <div className="bg-[#1a2b6d] p-8 rounded-[2rem] border-2 border-[#e2b157]/30 shadow-2xl sticky top-28">

        <div className="space-y-6">
          {/* Max Price Input */}
          <div className="space-y-3">
            <label className="text-[#e2b157] text-xs font-bold uppercase tracking-widest pl-1 block">
              Max Price per Plate
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-gray-500 font-semibold">$</span>
              </div>
              <input
                id="filter-price"
                type="number"
                min="0"
                className="block w-full pl-10 pr-4 py-4 bg-[#f0f4ff] text-gray-800 rounded-2xl focus:ring-2 focus:ring-[#e2b157] outline-none transition-all placeholder:text-gray-400 font-bold shadow-inner"
                placeholder="Ex. 500"
                value={maxPrice}
                onChange={(e) => setMaxPrice(e.target.value)}
              />
            </div>
          </div>

          <div className="pt-4 opacity-50">
            <div className="h-px bg-white/20"></div>
          </div>

          <div className="text-white/40 text-[10px] uppercase font-bold tracking-[0.2em] text-center px-4 leading-relaxed">
            Refine your results by adjusting the price range
          </div>
        </div>
      </div>
    </aside>
  );
};

export default FilterSidebar;
