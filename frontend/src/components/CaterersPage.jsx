'use client';

import { useState, useEffect } from 'react';
import { getCaterers } from '../services/api';
import CatererCard from './CatererCard';
import FilterSidebar from './FilterSidebar';
import { Search, Loader2, AlertCircle, UtensilsCrossed } from 'lucide-react';

/**
 * CaterersPage Component
 * Orchestrates the sidebar and main grid layout with the dark theme.
 * Marked as a Client Component because it uses state and effects.
 */
const CaterersPage = () => {
  const [caterers, setCaterers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filter States
  const [searchName, setSearchName] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  // Fetch caterers on mount
  useEffect(() => {
    const fetchCaterers = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getCaterers();
        setCaterers(data);
      } catch (err) {
        setError(err.response?.data?.message || err.message || 'Failed to fetch caterers');
      } finally {
        setLoading(false);
      }
    };

    fetchCaterers();
  }, []);

  // Filtering Logic
  const filteredCaterers = caterers.filter((caterer) => {
    const matchesName = caterer.name.toLowerCase().includes(searchName.toLowerCase());
    const matchesPrice = maxPrice ? caterer.pricePerPlate <= parseFloat(maxPrice) : true;
    return matchesName && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-[#00153d] px-6 py-12 lg:px-12">
      <div className="flex flex-col lg:flex-row gap-12 max-w-[1400px] mx-auto">

        {/* Redesigned Sidebar Filter */}
        <FilterSidebar maxPrice={maxPrice} setMaxPrice={setMaxPrice} />

        {/* Main Results Grid */}
        <div className="flex-1 space-y-8">

          {/* Top Search Bar */}
          <div className="relative group">
            <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-blue-400 group-focus-within:text-[#e2b157] transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-14 pr-6 py-5 bg-white/5 border-2 border-white/10 rounded-[1.5rem] text-white placeholder:text-blue-300/50 focus:outline-none focus:border-[#e2b157]/50 focus:bg-white/10 transition-all font-medium text-lg shadow-xl"
              placeholder="Search for your favorite caterer by name..."
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          <div className="pt-2">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-96">
                <Loader2 className="h-12 w-12 animate-spin text-[#e2b157] mb-4" />
                <p className="text-gray-400 font-medium">Loading premium caterers...</p>
              </div>
            ) : error ? (
              <div className="bg-red-900/30 border-l-4 border-red-500 p-6 rounded-xl flex items-start">
                <AlertCircle className="h-6 w-6 text-red-500 mr-4 mt-0.5" />
                <div>
                  <h3 className="text-lg font-bold text-red-200">Error fetching data</h3>
                  <p className="text-red-300 mt-1">{error}</p>
                </div>
              </div>
            ) : filteredCaterers.length === 0 ? (
              <div className="text-center py-32 bg-white/5 rounded-[2rem] border-2 border-dashed border-white/10">
                <UtensilsCrossed className="mx-auto h-20 w-20 text-white/20 mb-6" />
                <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
                <p className="text-blue-300">Try adjusting your budget or search term.</p>
                <button
                  onClick={() => { setSearchName(''); setMaxPrice(''); }}
                  className="mt-8 px-8 py-3 bg-[#e2b157] text-[#1a2b6d] rounded-xl font-bold shadow-lg transition-transform active:scale-95"
                >
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredCaterers.map((caterer) => (
                  <CatererCard key={caterer.id || caterer._id} caterer={caterer} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaterersPage;
