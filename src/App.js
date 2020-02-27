import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from './constants/routes';

import Header from './components/header/header.component';
import Menu from './components/menu-item/menu-item.component';
import HomePage from './pages/home/home.component';
import Footer from './components/footer/footer.component';

import './App.scss';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Menu />

        <Route exact path={ROUTES.HOME} component={HomePage}/>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
