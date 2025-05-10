import React, { useEffect, useState } from 'react'
import { useProductStore } from '../../stores/productStore';

const SearchBar = ({ onResults }) => {
    const products = useProductStore((state) => state.products);
    const [query, setQuery] = useState('');
    const [filtered, setFiltered] = useState([]);


    useEffect(() => {
        if (query.length === 0 || query.length > 2) {
            const results = products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase));
    
            setFiltered(results);
    
            if (onResults) onResults(results); 
        }
    }, [query, products, onResults]);


  return (
    <div className="w-full max-w-xl mx-auto my-4">
    <input
      type="search"
      placeholder="Search for products..."
      className="w-full p-3 border rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-600"
      onChange={(e) => setQuery(e.target.value)}
      value={query}
      aria-label="Search products"
    />
  </div>
  )
}

export default SearchBar;
