import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [pokemon, setPokemon] = useState({});

  const fetchPokemon = async () => {
    try {
      const randomId = Math.floor(Math.random() * 898) + 1;
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`,{
        timeout:10000
      } );
      const data = response.data;
      const spriteUrl = data.sprites && data.sprites.front_default;
      setPokemon({
        name: data.name,
        sprites:  spriteUrl,
      });
    } catch (error) {
      if (error.code === 'ECONNABORTED') {
        console.error('Timeout exceeded. Retrying...');
        await fetchPokemon();
      } else {
        console.error('Error fetching Pokémon:', error);
      }
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);



  const handleShuffle = async () => {
   await fetchPokemon()
  };

  return (
    <>
      <h1>Random Pokémon</h1>
      <div className='cold'>
          <div className='clay'>
           
            <button onClick={()=>handleShuffle()}>
            <img src={pokemon.sprites}   alt={pokemon.name} className='top'/>
            </button>
          
          </div>
      </div>
    </>
  );
};

export default App;