import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Aliens from './components/Aliens/Aliens';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Aliens />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
