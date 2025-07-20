import Input from './input';
import './App.css';
import Demo from './Demo';
import Add from './add';
import Forms from './forms';
import Call from './props';
import State from './state';
import Condition from './condition';
import Para from './Para';
import Home from './Home';
import ToggleComponent from './Toggle';
import Counter from './useEffect';
import { BrowserRouter, Routes, Route, Router, Link } from 'react-router-dom';


function App() {
return(
  <BrowserRouter>
  <h1>
    Welcome
  </h1>
  <Forms/>
  <nav>
    <Link to="/demo">demo</Link> | <Link to="/Add">add</Link>
  </nav>

  {/* <button onClick={}></button> */}
  
  <p>My name is Raj </p>
  <Routes>
    <Route path='/demo' element={<Demo/>}/>
     <Route path='/Add' element={<Add/>}/>
         <Route path="/" element={<Home />} />
        <Route path="/about" element={<Para />} />
  </Routes>
 <Input/>
 <Demo/>
 <Add/>
 <Call/>
 <State/>
 <Condition/>
 <Para/>
 <ToggleComponent/>
 <Counter/>
  </BrowserRouter>
); 
}

export default App;

