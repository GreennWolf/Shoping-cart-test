import { useFilters } from '../hooks/useFilters'
import {AddToCartIcon, RemoveFromCartIcon} from './Icons'
import './Products.css'
import {products as initialProds} from '../mocks/products.json'
import { useCart } from '../hooks/useCart'

export function Products(){
    const {filterProducts} = useFilters()

    const products = filterProducts(initialProds)

    const {addToCart,cart,removeFromCart} = useCart()

    const checkPorductInCart = product => {
        return cart.some(item => item.id == product.id)
    }

    return <main className='products'>
        <ul>
            {products.slice(0,15).map(product =>{
                const isProductInCart = checkPorductInCart(product)

                return <li key={product.id}>
                    <img src={product.thumbnail} alt={product.title} />
                    <div>
                        <strong>{product.title}</strong> - ${product.price}
                    </div>
                    <div>
                        <button style={{backgroundColor:isProductInCart ? 'red' :'green'}} onClick={()=> isProductInCart ? removeFromCart(product) : addToCart(product)}>{isProductInCart ? <RemoveFromCartIcon/> : <AddToCartIcon/>}</button>
                    </div>
                </li>
            })}
        </ul>
    </main>
}