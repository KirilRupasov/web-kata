import { Product } from './Models/Product';
import * as React from 'react';

interface ProductItemProps {
    product: Product;
}

class ProductItem extends React.Component<ProductItemProps, {}> {
    render(): JSX.Element {
        let free = '';
        if (this.props.product.free === true) {
            free = 'FREE';
        } else {
            free = 'PAID';
        }
        return <>{this.props.product.name}  {this.props.product.description} - {free}</>;
    }
}

interface ProductListProps {
    products: Product[];
}

class ProductList extends React.Component<ProductListProps, {}> {

    render(): JSX.Element {
        const productItems = this.props.products.map((prod) =>
            <li key={prod.name}><ProductItem product={prod} /></li>
        );

        return (
            <ul>{productItems}</ul>
            // <ProductItem product={this.props.products[0]} />
        );
    }
}

export default ProductList;