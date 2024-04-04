
import { ColorList } from './ColorList';
import React, { useContext } from 'react';
import { DataContext } from './Context';
import add from './addCart.png'
export default function Card({ product }) {
    const {addToCart} = useContext(DataContext);
    return (
        <div className="box">
            <li style={{ display: 'inline-flex' }}>
                <img src={product.image} alt={product.name} />
            </li>
            <h4>{product.name}</h4>
            <h4>${product.price}</h4>
            <h6>Color</h6>
            <ColorList colors={product.colors}/>
            <button onClick={() => addToCart(product)} className="addCart">
  <img src={add} alt="Add to Cart" className="buttonIcon"/>
  Сагслах
</button>
        </div>
    );
}
