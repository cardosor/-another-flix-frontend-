import { useEffect, useState } from 'react';
import {Routes, Route} from 'react-router-dom';
//Componetns
import Nav from '../../components/Nav/Nav'
import Footer  from '../../components/Footer/Footer'


//Pages
import Home from '../Home/Home'
import Login from '../Login/Login'
import SignUp from '../SignUp/SignUp'
import Movies from '../Movies/Movies'

//Services
import * as userService from '../../utilities/users-service';

//CSS
import './App.css';
import Singup from '../SignUp/SignUp';


function App() {
  const [user, setUser] = useState('');
  useEffect(()=>{
    setUser(userService.getUser())
    console.log("useEffect")
    console.log(user)
  },[])
  return (
    <div className="App">
      <Nav user={user} setUser={setUser} logout={userService.logout}/>
      {/* client-side route that renders the component instance if the path matachs the url in the address bar */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setUser={setUser}/>} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/movies' element={user && <Movies /> || <Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
