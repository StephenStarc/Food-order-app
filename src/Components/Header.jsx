import logo from '../assets/logo.jpg'
import Button from './UI/Button'
import { useContext } from 'react'
import { CartContext } from './store/CartContext'
import {Progess} from '../Components/store/UserProgressContext'

export default function Header(){
    const { progress , showCart} = useContext(Progess)
    console.log(progress);
    const cartctx = useContext(CartContext)
    const totalCartItems = cartctx.items.reduce(
        (totalno, item) => {
            return totalno + item.quantity
        }, 0)

        function UserShowCart(){
            showCart()
        }


    return(
        <div id="main-header">
            <div id='title'>
            <img src={logo} id='img'/>
            <h1 >REACT FOOD</h1>
            </div>
            <nav>
            <Button textOnly={true} onClick={UserShowCart}>Cart({totalCartItems})</Button>
            </nav>
            
    </div>
    )
}