import React, { useState, useEffect } from 'react';

const Search = ({ getQuery }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getQuery(q);
  };

  return (
    <section className='search'>
      <form action=''>
        <input
          type='text'
          className='form-contro'
          placeholder='Search characters'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
