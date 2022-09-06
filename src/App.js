import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Login from './Pages/Authentication/Login';
import SignUp from './Pages/Authentication/SignUp';
import CreateProfile from './Pages/Profile/CreateProfile';
import Welcome from './Pages/Splash/Welcome/Welcome';
import Home from './Pages/Home/Home/Home'
import Header from './Components/Header/Header/Header';
import Card from './Components/Card/Card';
import CardList from './Components/Card/CardList';
import Community from './Text/Community';
import Features from './NewFeauters/Features';
import Form from './Pages/Authentication/Form';
import Counter from './Pages/Authentication/Counter';
import Calculator from './Calculator';

function App() {


  /**
   *
   * useState
   * useEffect
   * useContext
   * 
   * useRef
   * useCallback
   * useMemo
   * 
   * useReducer
   * useLayout
   * 
   * useParams (react-router)
   */

  return (
    <Router>

      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/community" >
          <Route index element={<Community/>}/>
          <Route path=':name/desc' element={<Community/>}/>
        </Route>

        <Route path='/Features' >
                    <Route index element={<Features/>}/>
                    <Route path=':pois/:data' element={<Features/>}/>
        </Route>
        <Route path="/home"  >
          <Route index element={<Home />} />
          <Route path="cards" >
            <Route index element={<CardList />} />
            <Route path=":name/:desc" element={<Card />} />
          </Route>
        </Route>
        <Route path="/create-profile" element={<CreateProfile />} />
        <Route path="*" element={<p>404 not found</p>} />
      </Routes>
    </Router>
  );
}

export default App;
