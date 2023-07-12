
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Home1 from './Home1';
import Signup from "./Signup";
function App() {
  return (
    <>
    <Router>
      <div>
       <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Home1" element={<Home1/>}></Route>
       </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
