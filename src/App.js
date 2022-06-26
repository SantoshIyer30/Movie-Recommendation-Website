import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header';
import styled from 'styled-components';
import Search from './Search';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route exact path='/' element={<Search/>}/>
        </Routes>
      </Router>
    </div>
  );
}



export default App;
