import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';
import Footer from './Components/Footer';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Agent from './Pages/Agent';
import Findhome from './Pages/FindHome';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={< Home/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/agent' element={<Agent />}></Route>
          <Route path='/search' element={<Findhome />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='*' element={<ErrorPage />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
