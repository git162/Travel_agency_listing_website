import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Container from './components/Container';
import Home from './components/Home/Home'

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);


