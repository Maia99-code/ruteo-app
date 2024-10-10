import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ArtDetails from './components/ArtDetails';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/art/:id" element={<ArtDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
