import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import MyRoutes from './components/MyRoutes';

function App() {
  return <div>
    <BrowserRouter>
      <Layout/>
      <MyRoutes/>
    </BrowserRouter>
  </div>
}

export default App;
