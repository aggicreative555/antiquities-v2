import React, { useEffect, useRef, useState } from 'react'
import { useProductStore } from '../../stores/productStore';
import { showToast } from '../../utils/toast';
import { useDebounce } from '../../hooks/useDebounce';
import { toast } from 'react-toastify';

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
      
      if (debouncedQuery.length === 0 || debouncedQuery.length > 1 ) {
        const results = products.filter((product) => product.title.toLowerCase().includes(debouncedQuery.toLowerCase()));
        
        // 1 error toast per second
        if (debouncedQuery.length > 1 && results.length === 0 ) {
          showToast.error('No items match your search. Please try again.');
          errorToast.current = true;
        } else {
          setTimeout(() => {
            errorToast.current = false;
          },1000);
        }

        setSuggestions(results.slice(0,3));

        if (onResults) {
          onResults(results)
        } else {
          setSuggestions([]);
          onResults?.(products);
        }; 
      }
    }, [debouncedQuery, products, onResults]);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (wrapperRef.current && !wrapperRef.current.contains(event.target))
          setIsFocused(false);
      }
      document.addEventListener('mousedown', handleClickOutside);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      }
    }, []);

    const handleSuggestions = (title) => {
      setQuery(title);
      setSuggestions([]);
    }

  return (
    <div ref={wrapperRef}
    className="w-full max-w-xl mx-auto my-4 relative z-10">
    <input
      type="search"
      placeholder="Search for products..."
      className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      aria-label="Search products"
      onFocus={() => setIsFocused(true)}
    />

    {isFocused && suggestions.length > 0 && (
      <ul className='absolute left-0 right-0 mt-1 py-2 bg-white border rounded shadow z-10 max-h-60 overflow-y-auto'>
        {suggestions.map((product) => (
          <li key={product.id}
          className='px-6 py-2 hover:bg-gray-300 cursor-pointer'
          onClick={() => handleSuggestions(product.title)}
          >
            {product.title}
          </li>
        ))}

      </ul>
    )}
  </div>
  )
}

export default SearchBar;
