import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '@/styles/products.module.css'

const SearchInput = () => {
  return (
    <div className={styles.boxsearch} >
      <input
        type="text"
        className="form-control w-100"
        placeholder="Search..."
        aria-label="Search"
        aria-describedby="search-icon"
      />
    
    </div>
  );
};

export default SearchInput;
