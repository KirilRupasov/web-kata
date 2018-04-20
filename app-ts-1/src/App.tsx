import * as React from 'react';
import { Component } from 'react';
import './App.css';
import { GetData } from './data';
import { Product } from './Models/Product';
import { ProductList } from './ProductList';

const data: Product[] = GetData();

class App extends Component {
  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Welcome Introduction to <code>web-kata#1-Typescript</code></h2>
        </div>
        <p className='App-intro'>
          To get started change this text and then save to reload.
        </p>
        <ProductList products={data}/>
      </div>);
  }
}

export default App;