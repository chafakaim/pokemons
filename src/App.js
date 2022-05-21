
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './componenet/detail'
import Navbar from "./componenet/navbar.jsx";
function App() {
  return (
    <div className="container">
    <Navbar/>    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detail/:id' element={<Detail/>}/>
    </Routes>
    </div>
  );
}

export default App;
