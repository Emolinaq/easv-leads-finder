import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    // Lógica para buscar leads
    onSearch(query);
  };

  return (
    <div className="flex items-center space-x-2 text-gray-600">
      <input
        type="text"
        placeholder="Buscar por sector, nicho, o tipo de empresa"
        className="flex-1 p-2 border border-gray-300 rounded"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleSearch()} // Buscar al presionar Enter
      />
      <button
        onClick={handleSearch}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;