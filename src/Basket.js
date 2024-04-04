import React, { useContext } from 'react';
import { DataContext } from './Context';
import { ColorList } from './ColorList';
export default function Basket() {
    const {cartItems, addToCart, removeFromCart, clearCart, submitOrder} = useContext(DataContext);
    const totalPrice = cartItems.reduce((total, currentItem) => total + (currentItem.price * currentItem.quantity), 0);
    return (
        <div className="basket-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className="items-container">
                {cartItems.map((item, index) => (
                    <div className="box" key={index}>
                        <li style={{ display: 'inline-flex' }}>
                            <img src={item.image} alt={item.name} />
                        </li>
                        <h4>{item.name}</h4>
                        <h4>${item.price}</h4>
                        <h6>Color</h6> 
                        <ColorList colors={item.colors} />
                        <button className="btn1" onClick={()=>addToCart(item)}>+</button>
        {item.quantity}
        <button className= "btn2" onClick={()=>removeFromCart(item)} disabled={item.quantity===0}>-</button>
                    </div>
                ))}
            </div> 
{cartItems.length>0 && <div>  
       <div className='order' style={{ width: '200px', height:'200px', padding: '20px', border: '1px solid #ddd', position: 'sticky', borderRadius: '5px', marginTop:'170px', marginRight:'50px' }}>
                 <div className='totalQty' style={{ marginBottom: '10px' }}>
                    <h4>Нийт бараа: {cartItems.length}</h4>
                </div> 
                <div className='totalPrice'>
                    <h4>Нийт үнэ: ${totalPrice}</h4>
                </div>
                <button onClick={submitOrder} className="addCart">Захиалах</button>
            </div>
            <button className="addCart"  onClick={clearCart}>Сагс хоослох</button></div>}
            
            {cartItems.length===0 && <h4 style={{marginRight:'700px'}}>Сагсанд бараа байхгүй байна</h4>}
        </div>
    );
}

