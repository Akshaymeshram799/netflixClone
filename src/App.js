import './App.css';
import FrontPage from './components/FrontPage';
import { Routes, Route } from 'react-router-dom';
import RegisterPage from './components/RegisterPage'
import LoginPage from './components/LoginPage';
import { useState, createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentMain from './components/contentComp/ContentMain';
import Fileuplaod from './components/FileUplaod';


const AuthState = createContext();
const setAuthState = createContext()
function App() {
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const history = useNavigate();

  return (
    <>
      <Routes>
        
        <Route path='/movies' element={<AuthState.Provider value={isAuthenticate}><ContentMain/></AuthState.Provider>}/>
        <Route path='/' element={<AuthState.Provider value={isAuthenticate}><setAuthState.Provider value={setIsAuthenticate}><FrontPage /></setAuthState.Provider></AuthState.Provider>} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/secret' element={<h1>Secret Page</h1>} />
        <Route path='/login' element={<LoginPage authenticateState={setIsAuthenticate} authenticate={isAuthenticate} />} />
        <Route path='/fileupload' element={<Fileuplaod/>} />
        <Route path='*' element={<h1 style={{color:'black',display:"flex",justifyContent:"center",alignItems:"center",height:"50vh"}}>Page not found 404</h1>} />
      </Routes>


    </>
  );
}

export { AuthState,setAuthState }
export default App;