import * as React from 'react';
import { Component } from 'react';
import { Product } from './Models/Product'

interface ProductComponentProps {
  product: Product
}

class ProductComponent extends Component<ProductComponentProps, {}> {
  render() {
    return <div className='product'>
      <div className='details'>
        <div className='name'>{this.props.product.name}</div>
        <div className='desc'>{this.props.product.description}</div>
      </div>
    </div>
  }
}

export default ProductComponent