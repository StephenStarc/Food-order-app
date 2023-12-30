import { useEffect } from "react"
import { useContext } from "react"
import { useState } from "react"
import MealItem from "./MealItem"
export default function Meals() {

    const [loadedMeals, setLoadedMeals] = useState([])
   
    
   useEffect(()=> {
    async function mealFetch(){
        const response = await fetch('http://localhost:3000/meals')
        const itemMeals = await response.json()
    
        if(!response.ok){
            //.....
        }
    
        // return itemMeals
        setLoadedMeals(itemMeals)
       }

       mealFetch()
   },[])
//    <li key={meal.id}>{meal.name}
//        </li>
    return(
       <ul id="meals">
        {loadedMeals.map((meal)=> 
        (<MealItem meal={meal}/>))}
        </ul>
    )
}