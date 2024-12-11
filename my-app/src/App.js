import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import  Carousel  from './page/Carousel';
import  Styles  from './text/Styles';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carousel/>
      <Styles/>
      <footer/>
    </div>
  );
}

export default App;
