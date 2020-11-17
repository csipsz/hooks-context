import Navbar from './components/Navbar';
import { ProjectList } from './components/ProjectList';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <ProjectList/>
        <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
