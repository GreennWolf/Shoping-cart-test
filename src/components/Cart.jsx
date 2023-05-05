import { useId } from "react";
import { ClearCartIcon,RemoveFromCartIcon,CartIcon } from "./Icons";
import './Cart.css'
import { useCart } from "../hooks/useCart";
export function Cart(){
    const cartCheckboxId = useId()
    const {cart,addToCart,clearCart} = useCart()
    return (
        <>
            <label htmlFor={cartCheckboxId} className="cart-button">
                <CartIcon/>    
            </label>       
            <input type="checkbox" id={cartCheckboxId} hidden />

            <aside className="cart">
                {cart.map(prod => {
                    return <ul>
                    <li key={prod.id}>
                        <img src={prod.thumbnail} alt="key" />
                        <div>
                            <strong>{prod.title}</strong> - ${prod.price}
                        </div>
                        <footer>
                            <small>Qty:{prod.quantity}</small>
                            <button onClick={()=> addToCart(prod)}>+</button>
                        </footer>
                    </li>
                </ul>
                })}
                <button className="clear-btn" onClick={()=>clearCart()}>
                    <ClearCartIcon/>
                </button>
            </aside>
        </>
    )
}