import { useEffect, useState } from 'react';
import '../App.css';

function CartList({ Cart }) {

    const [CART, setCART] = useState([])

    useEffect(() => {
        setCART(Cart)
    }, [Cart])

    return (
        <div>
            {
                CART?.map((CartItem, Cartindex) => {
                    return (
                        <div>
                            <img src={CartItem.img} width={40} />
                            <span> {CartItem.title} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return Cartindex === index ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >-</button>
                            <span> {CartItem.quantity} </span>
                            <button
                                onClick={() => {
                                    const _CART = CART.map((item, index) => {
                                        return Cartindex === index ? { ...item, quantity: item.quantity + 1 } : item
                                    })
                                    setCART(_CART)
                                }}
                            >+</button>
                            <span> Rs. {CartItem.price * CartItem.quantity} </span>
                        </div>
                    )
                })
            }

            <p> Total  <span></span>
                {
                    CART.map(item => item.price * item.quantity).reduce((total, value) => total + value, 0)
                }
            </p>
        </div >
    )
}

export default CartList;