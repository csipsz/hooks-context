import Navbar from './components/Navbar';
import { ProjectList } from './components/ProjectList';
import ThemeContextProvider from './contexts/ThemeContext';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar/>
        <ProjectList/>
        <img src={logo} className="App-logo" alt="logo" />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
