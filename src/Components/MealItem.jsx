import {currencyFormatter} from '../util/formatting'
import { useContext } from 'react'
import { CartContext } from './store/CartContext'
import Button from './UI/Button'
export default function MealItem({meal}){
    const {addtocart} = useContext(CartContext )

    function handleItemToCart (meal) {
        addtocart(meal)
    }

    return(
        <li key={meal.id} className="meal-item">
            <article>
            <img src={`http://localhost:3000/${meal.image}`}/>
            <div>
            <h3>{meal.name}</h3>
            <p className="meal-item-price">
                {currencyFormatter.format(meal.price)}</p>
            <p className="meal-item-description">{meal.description}</p>
            </div>
            <p className="meal-item-actions">
                <Button onClick={() => {handleItemToCart(meal)}}>Add to Cart</Button>
            </p>
            </article>
        </li>
    )
}