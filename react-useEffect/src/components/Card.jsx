const Card = ({ pokemon }) => {
  let c1 = Math.floor(Math.random() * 256);
  let c2 = Math.floor(Math.random() * 256);
  let c3 = Math.floor(Math.random() * 256);

  return (
    <div
      className="card"
      style={{ backgroundColor: `rgb(${c1},${c2},${c3})`, opacity: 0.9 }}
    >
      <div className="img">
        <img src={pokemon.sprites.other.dream_world.front_default} alt="" />
      </div>

      <h1>{pokemon.name}</h1>
      <h3>
        
        <span className="type">
          {pokemon.types
            .map(function (elem) {
              return elem.type.name;
            })
            .join(", ")}
        </span>
      </h3>

      <div className="details">
        <h3>
          Weight: <span>{pokemon.weight}</span>
        </h3>
        <h3>
          Height: <span>{pokemon.height}</span>
        </h3>

        <h3>
          Experience: <span>{pokemon.base_experience}</span>
        </h3>
        <h3>
          Move: <span>{pokemon.moves[0].move.name}</span>
        </h3>
      </div>
    </div>
  );
};

export default Card;
