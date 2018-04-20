import * as React from 'react';
import { Product } from './Models/Product';

interface ProductListProps {
    products: Product[];
}

interface ProductItemProps {
    product: Product;
}

class ProductItem extends React.Component<ProductItemProps, {}> {
    render(): JSX.Element {
        return (
            <li>
                <h4>
                    {this.props.product.name}
                    <i className='red'>{this.props.product.new ? ' new' : ''}</i>
                    <i className='green'>{this.props.product.free ? ' free' : ''}</i>
                </h4>
                <p>
                    {this.props.product.description}
                </p>               
            </li>
        );
    }
}

class ProductList extends React.Component<ProductListProps, {}> {
    dataFormatted = this.props.products.map((product: Product) =>
        <ProductItem key={product.name} product={product}/>
    );

    render(): JSX.Element {
        return (
            <div className='products'>
                <ul>
                    {this.dataFormatted}
                </ul>
            </div>
        );
    }
}

export { ProductList };