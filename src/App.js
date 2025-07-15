import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import Header from './Component/Common/Header/Header'
import Footer from './Component/Common/Footer/Footer';
import Home from './Component/Home/Home'
import Editoral  from './Component/Editoral/Editoral'
import './style/Global.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.component} />
            ))}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}


export default App;