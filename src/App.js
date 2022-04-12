import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Header from './Components/Header';
import Reviews from './Components/Reviews';
import Dashboard from './Components/Dashboard';
import Blogs from './Components/Blogs';
import About from './Components/About';
import Contact from './Components/Contact';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviews' element={<Reviews />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
