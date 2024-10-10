import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const ArtDetails = () => {
  const { id } = useParams(); // Obtenemos el ID de la URL
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState(null); // Estado para almacenar los datos del Pokémon

  // Función que obtiene el Pokémon desde la API
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data); // Guardamos los datos en el estado
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
        setPokemon(null); // Si ocurre un error, seteamos null
      }
    };
    fetchPokemon();
  }, [id]);

  if (!pokemon) {
    return <h2>Pokémon no encontrado</h2>;
  }

  // Función para navegar al siguiente Pokémon
  const goNext = () => {
    const nextId = pokemon.id + 1;
    navigate(`/art/${nextId}`);
  };

  // Función para navegar al Pokémon anterior
  const goPrev = () => {
    const prevId = pokemon.id === 1 ? 1010 : pokemon.id - 1; // 1010 es el número aproximado de pokémon
    navigate(`/art/${prevId}`);
  };

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>ID: {pokemon.id}</p>
      <div>
        <button onClick={goPrev}>Retroceder</button>
        <button onClick={() => navigate('/home')}>Ir al Home</button>
        <button onClick={goNext}>Avanzar</button>
      </div>
    </div>
  );
};

export default ArtDetails;
