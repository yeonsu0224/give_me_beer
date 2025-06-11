
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Nav from './components/Nav';

import Sub from './components/sub';


function App() {



  return (
    <BrowserRouter>

    
    <Routes>
    <Route path="/" element={<Main />} />

    <Route path="/sub/:id" element={<Sub />} />
    </Routes>


    
    
    
    </BrowserRouter>
  );
}

export default App;
