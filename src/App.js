import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './pages/SearchBar';
import ShoppingCart from './pages/ShoppingCart';
import DetailsProduct from './pages/DetailsProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/product-detail/:id/:categoryId"
            props
            render={ (props) => <DetailsProduct { ...props } /> }
          />
          <Route path="/shopping-cart" component={ ShoppingCart } />
          <Route path="/" exact component={ SearchBar } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
