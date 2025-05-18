import React, { useEffect, useRef, useState } from 'react';
import { useProductStore } from '../../stores/productStore';
import { showToast } from '../../utils/toast';
import { useDebounce } from '../../hooks/useDebounce';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ onResults }) => {
  const products = useProductStore((state) => state.products);
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 300);
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const wrapperRef = useRef(null);
  const errorToast = useRef(false);

  // dismiss error on empty search field
  toast.dismiss(showToast.error);

  useEffect(() => {
    if (debouncedQuery.length === 0 || debouncedQuery.length > 1) {
      const results = products.filter((product) =>
        product.title.toLowerCase().includes(debouncedQuery.toLowerCase())
      );

      // 1 error toast per second
      if (debouncedQuery.length > 1 && results.length === 0) {
        showToast.error('No items match your search. Please try again.');
        errorToast.current = true;
      } else {
        setTimeout(() => {
          errorToast.current = false;
        }, 1000);
      }

      setSuggestions(results.slice(0, 3));

      if (onResults) {
        onResults(results);
      } else {
        setSuggestions([]);
        onResults?.(products);
      }
    }
  }, [debouncedQuery, products, onResults]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target))
        setIsFocused(false);
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSuggestions = (title) => {
    setQuery(title);
    setSuggestions([]);
  };

  return (
    <div
      ref={wrapperRef}
      className="w-full flex justify-between items-center container max-w-[500px] mx-auto px-4 mt-5 mb-16 relative z-10 border-b border-gray-300 hover:border-black focus:border-none group transition-all duration-300 ease-in-out"
    >
      <input
        type="search"
        placeholder="What are you looking for today?"
        className="uppercase text-black break-words text-wrap w-full overflow-visible p-3 focus:border-b-2 focus:outline-none group-hover:text-gray-400 focus:normal-case focus:italic font-button transition-all duration-300 ease-in-out tracking-tighter text-sm md:text-base"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        aria-label="Search products"
        onFocus={() => setIsFocused(true)}
      />
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="ml-3 shrink-0 text-lg group-hover:scale-125 transition-transform duration-300 ease-in-out"
      />

      {isFocused && suggestions.length > 0 && (
        <ul className="text-sm absolute left-0 right-0 top-14 mt-1 pt-2 pb-5 bg-white border-b-[1px] border-gray-300 font-caslon font-light italic z-10 max-h-60 overflow-y-auto transition-all duration-300 ease-in-out">
          {suggestions.map((product) => (
            <li
              key={product.id}
              className="px-6 py-2 hover:bg-gray-100 hover:tracking-wider cursor-pointer transition-all duration-300 ease-in-out"
              onClick={() => handleSuggestions(product.title)}
            >
              {product.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
