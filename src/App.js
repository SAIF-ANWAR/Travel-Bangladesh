import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Destination from './pages/Destination/Destination';
import SignUp from './pages/SignUp/SignUp';
import Header from './pages/Header/Header';
import Footer from './pages/Footer/Footer';
import Contact from './pages/Contact/Contact';
import Booking from './pages/Booking/Booking';
import RequireAuth from './pages/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/destination' element={<Destination></Destination>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
        <Route path='/booking' element={
          <RequireAuth>
            <Booking></Booking>
          </RequireAuth>
        }></Route>
        <Route path='/footer' element={<Footer></Footer>}></Route>
      </Routes>

    </div>
  );
}

export default App;
