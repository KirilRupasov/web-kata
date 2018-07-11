import * as React from 'react';
import { Component } from 'react';
import { Route } from 'react-router-dom';

import ProductMenu from './ProductMenu';
import ProductContainer from './ProductContainer';
import { Product } from './Models/Product';
import './App.css';

interface Props { }

interface State {
  products: Product[];
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // Access the REST API instead of grabbing products from data.ts
    this.state = { products: [] };
    this.fetchProducts();
  }

  fetchProducts = () => {
    return fetch('/api/products/get', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'same-origin'
      }).then((response: Response) => {
        return response.json();
      }).then(json => {
          this.setState({products: json});
      });
  }

  removeProduct = (name: string): void => {
    fetch('/api/products/delete/' + name, {
      method: 'DELETE',
      credentials: 'same-origin'
    }).then(() => {
      this.fetchProducts();
    });
  }

  render(): JSX.Element {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>Kata 5 TypeScript - Interaction with backend server through REST API calls</h2>
        </div>
        <div className='products-container'>
          <ProductMenu products={this.state.products} removeProduct={this.removeProduct}/>
          <Route
            exact={true}
            path='/products/:productName'
            render={(props) => <ProductContainer {...props} products={this.state.products} />}
          />
        </div>
      </div>
    );
  }
}

export default App;
