import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile'
import Hearder from './Component/Header'
import House from './Pages/House'
import Car from './Pages/Car'   
import Contact from './Pages/Contact'
import UserSignUp from './Pages/UserSignUp'

export default function App() { 
  return <BrowserRouter> 
  <Hearder />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
        <Route path="sign-in" element={<SignIn />}/>
        <Route path="User-sign-up" element={<UserSignUp />}/>
        <Route path="sign-up" element={<SignUp />}/>
        <Route path="profile" element={<Profile />}/>
        <Route path="House" element={<House />}/>
        <Route path="Car" element={<Car />}/>
        <Route path="Contact" element={<Contact />}/>
    </Routes>
</BrowserRouter>
  
}
