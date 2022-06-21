import './App.css';
import { NavBar } from './components/All';
import  AOS  from 'aos';
AOS.init();

function App() {
  return (
    <div className="App">
      <NavBar />
    </div>
  );
}

export default App;