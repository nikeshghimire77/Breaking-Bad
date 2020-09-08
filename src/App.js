import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

import Header from './components/UI/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search';

import { fetchItems } from './api/';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );

      // console.log(result.data)

      setItems(result.data);
      setIsLoading(false);
    };

    fetchAPI();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
