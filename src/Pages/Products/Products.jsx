import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from './Product';

const Products = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div className='grid grid-cols-3 gap-4 p-4'>
            {
                !!products && products?.products?.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default Products;