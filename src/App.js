
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './components/Main';

import Sub from './components/sub';


function App() {



  return (
    <Router>

    
    <Routes>
    <Route path="/" element={<Main />} />
    <Route path="/sub/:id" element={<Sub />} />
    </Routes>


    
    
    
    </Router>
  );
}

export default App;
