
import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Login from './Login';
import Home1 from './Home1';
import Signup from "./Signup";
import Cevent from './Cevent';
import Mevent1 from './Mevent1';
import Profile from "./Profile";
import Chatroom from './Chatroom';
import Cevent1 from './Cevent1';
import Updateeve from './Updateeve';
import Ticket from './Ticket';
function App() {
  return (
    <>
    <Router>
      <div>
       <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/Home1" element={<Home1/>}></Route>
        <Route path="/Cevent" element={<Cevent/>}></Route>
        <Route path="/Mevent1" element={<Mevent1/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/Chatroom" element={<Chatroom/>}></Route>
        <Route path="/Cevent1" element={<Cevent1/>}></Route>
        <Route path="/Ticket" element={<Ticket/>}></Route>
        <Route path="/Updateeve" element={<Updateeve/>}></Route>

    
       </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;
