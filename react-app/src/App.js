import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import ProductList from './components/ProductList'; // Create this component
import ProductDetail from './components/ProductDetail'; // Create this component
import ProductForm from './components/ProductForm'; // Create this component

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/products" component={ProductList} />
        <Route path="/products/:id" component={ProductDetail} />
        <Route path="/add-product" component={ProductForm} />
        <Route path="/edit-product/:id" component={ProductForm} />
      </Switch>
    </Router>
  );
}

export default App;
