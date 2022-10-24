import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { HomePage } from './pages/HomePage/HomePage';

const App = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
    </Routes>
  );
}

export default App;
