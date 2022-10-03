import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { GlobalStyles } from "./components/GlobasStyles/GlobalStyles";
import { HomePage } from './pages//HomePage/HomePage';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about"/>
          <Route path="/contact"/>
          <Route path="/projects"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
