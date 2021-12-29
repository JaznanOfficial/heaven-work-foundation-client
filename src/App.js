import logo from './logo.svg';
import './App.css';
import Navigation from './Componets/Navigation/Navigation';
import Homepage from './Componets/Homepage/Homepage';
import Footer from './Componets/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;
