import { Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Login } from './components/Login'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path = '/' element = {<Home />} />
        <Route path = 'about' element = {<About />} />
        <Route path = 'login' element = {<Login />} />
      </Routes>   
    </> 
  );
}

export default App;
