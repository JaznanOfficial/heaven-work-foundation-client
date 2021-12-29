import logo from './logo.svg';
import './App.css';
import Navigation from './Componets/Navigation/Navigation';
import Homepage from './Componets/Homepage/Homepage';
import Footer from './Componets/Footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Navigation></Navigation>
      <Routes>
      <Route path='/' element={<Homepage></Homepage>}></Route>
      <Route path='home' element={<Homepage></Homepage>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
