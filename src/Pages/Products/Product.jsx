import React from 'react';

const Product = ({ product }) => {
    const { name, id, image, price, stock, title } = product || {}
    return (
        <div>

        </div>
    );
};

export default Product;