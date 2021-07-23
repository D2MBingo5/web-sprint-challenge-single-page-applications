// How individual pizzas display on the DOM after submissions
import React from 'react'

function Pizza(props) {
    const { details } = props

    if (!details) {
        return <h3>Fetching pizzas...</h3>
    }

    return (
        <div className='pizzas-container'>
            <p>Name: {details.name}</p>
            <p>Size: {details.size}</p>
            <p>Pepperoni? {details.topping1}</p>
            <p>Green Bell Pepper? {details.topping2}</p>
            <p>Extra Cheese? {details.topping3}</p>
            <p>Sausage? {details.topping4}</p>
        </div>
    )
}

export default Pizza