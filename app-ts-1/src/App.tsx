import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { GetData } from './data';
import ProductList from './ProductList';

const products = GetData();

class App extends Component {
  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome Introduction to <code>web-kata#1-Typescript</code></h2>
        </div>
        <p className='App-intro'>
          To get started change this text and save save to reload.
      </p>
        <div className='products'>
          <ul><ProductList products={products} /></ul>
        </div>
      </div>);
  }
}

export default App;