import { useEffect, useState } from 'react'
import { List } from 'ui'

const api = "https://pokeapi.co/api/v2/pokemon?limit=151"

const App = () => {
  const [data, setData] = useState([])

 const fetchPokemon = async () => {
  try {
    const response = await fetch(api);
    if (!response.ok) throw new Error("Failed to fetch data");
    
    const data = await response.json();
    setData(data.results);
  } catch (error) {
    console.error(error);
  }
};

useEffect(() => {
  fetchPokemon();
}, []);

  return (
  <>
    <h1>Pokemon list:</h1>
    <List data={data} /> 
  </>
  )
}

export default App
