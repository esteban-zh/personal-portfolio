import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
    </div>
  );
}

export default App;
