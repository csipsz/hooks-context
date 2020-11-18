import Navbar from './components/Navbar';
import { ProjectList } from './components/ProjectList';
import Themetoggle from './components/Themetoggle';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext'
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>

          <Navbar/>
          <ProjectList/>
          <Themetoggle/>
          <img src={logo} className="App-logo" alt="logo" />

        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
