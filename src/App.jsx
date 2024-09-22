import React, { useState, useEffect } from 'react';
import axios from 'axios';


const App = () => {
  const [Score, setScore] = useState(0);
  const [Bestscore, setBestscore] = useState(0);

 
  return (
    <div>
    <h1>Random Pokémon</h1>
    <div>
      <Count Score={Score} setScore={setScore} Bestscore={Bestscore}/>
      <div className='clay'>
        {[...Array(5)].map((_,i) => (
      <Memory key={i} Score={Score} setScore={setScore} Bestscore={Bestscore} setBestscore={setBestscore}/>
        ))}
      </div>

      <div className='clay'>
      {[...Array(5)].map((_,i) => (
      <Memory key={i} Score={Score} setScore={setScore} Bestscore={Bestscore} setBestscore={setBestscore}/>
        ))}
      </div>

      </div>
    </div>
  );
  
}

const Memory =({Score,setScore,Bestscore,setBestscore})=>{
  const [pokemon, setPokemon] = useState({});
  const[fetchedIds,setFetchedIds]=useState([])
  let randomId 

  const fetchPokemon = async () => {
    try {
      randomId = Math.floor(Math.random() * 50) + 1;
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
   setScore(Score+1)

   if (fetchedIds.includes(randomId)) {
    if (Score > Bestscore) {
      setBestscore(Score);
    }
    setScore(0);
  } else {
    setScore(Score + 1);
    setFetchedIds([...fetchedIds, randomId]);
  }
};

  //  if(fetchedIds.includes(randomId)){
  //   setBestscore(Math.max(Bestscore,Score))
  //   setScore(0)
  //  }else{
  //   setScore(Score + 1);
  //   setBestscore([...fetchedIds,randomId])
  //  }
  // }

  return (
    <>
     <div>
      <div className='cold'>
          <div>
            <button onClick={()=>handleShuffle()}  className='btn'>
            <img src={pokemon.sprites}   alt={pokemon.name} className='top'/>
            </button>
          </div>
      </div>
    </div>
    </>
  );
};



const Count =({Score,Bestscore})=>{
  return(
    <div>
      <h2>Score:{Score}</h2>
      <h2>Bestscore:{Bestscore}</h2>
    </div>
  )
}


export default App;