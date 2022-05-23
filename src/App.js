
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import Detail from './componenet/detail.jsx'
import Edite from './componenet/edite.jsx'
import Navbar from "./componenet/navbar.jsx";
function App() {
  return (
    <div className="container">
      <Navbar/>    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/edite/:id' element={<Edite/>}/>
      </Routes>
    </div>
  );
}
export default App;
