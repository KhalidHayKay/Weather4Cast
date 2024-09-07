import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SearchBar.css'; // Add your custom CSS here if needed

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="search-container">
      <motion.button
        className="search-icon"
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 1 }}
        animate={{ scale: isOpen ? 0.8 : 1 }}
        transition={{ duration: 0.3 }}
      >
        &#128269;
      </motion.button>
      <motion.input
        type="text"
        className="search-input"
        placeholder="Search..."
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};

export default SearchBar;
