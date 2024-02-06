import React, { useState } from 'react';
import '../App.css';
import { ProgramsList } from './ProgramsList';

export const SearchBar = () => {

  const [query, setQuery] = useState("");

  const onChange = e => {
    e.preventDefault();
    setQuery(e.target.value)
  }

  return (
    <section className="SearchBar container mt-4">
    <div className="row">
        <div className="col-md-12">
        <form>
          <div className="form-group d-flex">

            <input 
              type="text" 
              className="form-control mr-5" 
              placeholder="Search..." 
            />

            <button 
              type="submit" 
              className="btn btn-primary rounded ms-3 px-4 fs-4" 
              style={{ backgroundColor: '#7520A5' }}
              value={query}
              onChange={onChange}
              >Search
            </button>

          </div>
        </form>
        </div>
    </div>
    <div>
      <ProgramsList />
    </div>
</section>
  )
}