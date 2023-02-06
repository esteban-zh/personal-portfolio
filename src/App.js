import './App.css';
import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';
import { Skills } from './components/Skills/Skills';
import { Projects } from './components/Projects/Projects';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Contact } from './components/Contact/Contact';
import { MailchimpForm } from './components/MailchimpForm/MailchimpForm';

function App() {
  return (
    <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Projects />
        <Contact />
        <MailchimpForm />
    </div>
  );
}

export default App;
