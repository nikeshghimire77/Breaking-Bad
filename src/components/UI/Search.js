import React, { useState, useEffect } from 'react';

const Search = () => {
  return (
    <section className='search'>
      <form action=''>
        <input
          type='text'
          className='form-contro'
          placeholder='Search characters'
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
