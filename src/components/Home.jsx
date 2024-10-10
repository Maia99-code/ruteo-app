import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGalleryNavigation = () => {
    navigate('/art/1'); // Navega al primer Pokémon (ID: 1)
  };

  return (
    <div>
      <h1>Bienvenido a la Galería Pokémon</h1>
      <button onClick={handleGalleryNavigation}>Ver Galería</button>
    </div>
  );
};

export default Home;
