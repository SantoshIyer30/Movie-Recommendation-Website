import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import Search from './Search';
import Results from './Results';


function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Search/>}/>
          <Route path='/results' element={<Results />}/>
        </Routes>
      </Router>
    </div>
  );
}



export default App;
