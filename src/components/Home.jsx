import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleGalleryNavigation = () => {
    navigate('/art/1'); 
    // Navega a la primera imagen. 
  };

  return (
    <div>
      <h1>Bienvenido a la Galería Pokémon</h1>
      <button onClick={handleGalleryNavigation}>Ver Galería</button>
    </div>
  );
};

export default Home;
