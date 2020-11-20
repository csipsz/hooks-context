import Navbar from './components/Navbar';
import { ProjectList } from './components/ProjectList';
import Themetoggle from './components/Themetoggle';
import ThemeContextProvider from './contexts/ThemeContext';
import AuthContextProvider from './contexts/AuthContext'
import logo from './logo.svg';
import ProjectContextProvider from './contexts/ProjectContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>

          <Navbar/>
          <ProjectContextProvider>
            <ProjectList/>
          </ProjectContextProvider>
          <Themetoggle/>
          <img src={logo} className="App-logo" alt="logo" />

        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
