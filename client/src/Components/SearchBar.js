import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchText, setSearchText] = useState('');

  const handleChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the search text to the parent component for handling
    onSearch(searchText);
  };

  return (
    <section className="SearchBar container mt-4">
      <div className="row">
        <div className="col-md-12">
          <form onSubmit={handleSubmit}>
            <div className="form-group d-flex">
              <input
                type="text"
                className="form-control mr-5"
                placeholder="Search..."
                value={searchText}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="btn btn-primary rounded ms-3 px-4 fs-4"
                style={{ backgroundColor: '#7520A5' }}
              >
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
