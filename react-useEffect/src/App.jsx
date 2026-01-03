import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";
const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=24");

      const detailsPokemonData = res.data.results.map(async function (elem) {
        const response = await axios(elem.url);

        return response.data;
      });

      const allResponses = await Promise.all(detailsPokemonData);

      setPokemons(allResponses);

    
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="app">
      {pokemons.map(function (elem, idx) {
        return (
          <div key={idx}>
            <Card pokemon={elem} />
          </div>
        );
      })}

      
    </div>
  );
};

export default App;
