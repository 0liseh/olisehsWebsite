import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { GlobalStyles } from "./components/GlobasStyles/GlobalStyles";
import { NavBar } from './components/NavBar/NavBar';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { HomePage } from './pages/HomePage/HomePage';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <NavBar/> {/*Every single page will include a navbar and the routes below*/}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact"/>
          <Route path="/projects"/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
