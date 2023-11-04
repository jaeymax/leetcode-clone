import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
//import Problem from './components/Problem';
import { BrowserRouter, Route,Routes } from 'react-router-dom';
import Problem from './pages/Problem';
import Problems from './pages/Problems';

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
        <Header/>
        <Routes>
          <Route path = '/' exact element = {<Home/>} />
          <Route path = 'problems/:id' element={<Problem/>} />
          <Route path = 'problemset/all' element = {<Problems/>} />
        </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
