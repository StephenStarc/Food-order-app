import Modal from "./UI/Model";
import {CartContext} from'../Components/store/CartContext'
import { useContext } from "react";
import {currencyFormatter} from '../util/formatting'
import Button from "./UI/Button";
import {Progess} from '../Components/store/UserProgressContext'
export default function Cart(){
    const {items} = useContext(CartContext)

const {progress, hideCart} = useContext(Progess)

function handleHideCart(){
    hideCart()
}

const cartTotal = items.reduce((preval, item) => {
    return( preval + item.quantity * item.price)
   
}, 0)
    return (
    <Modal className="cart" open={progress === 'cart'}>
        <h2>Your Cart</h2>
        <ul>
        {items.map(item => <li key={item.id}>{item.name} - {item.quantity}</li>)}</ul>
    <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
    <p className="modal-action">
        <Button textOnly onClick={handleHideCart}>Close</Button>
        <Button onClick={handleHideCart} >Cart</Button>
    </p>
    </Modal>
)
}