import './App.css';
import Navbar from "../src/Components/Navbar"
// import TenderList from "../src/Components/TenderList"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import TenderList from './Components/TenderList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}> </Route>
        <Route path="/detail/:fld_id" element={<TenderList/>}> </Route>
      </Routes>    
      </BrowserRouter>
    </div>
  );
}

export default App;
