import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './components/UI/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/UI/Search';

import { fetchItems } from './api/';

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchItems();
      // console.log(data.data);
      setItems(data.data);
      setIsLoading(false);
    };

    fetchAPI();
  }, []);

  return (
    <div className='container'>
      <Header />
      <Search />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
};

export default App;
