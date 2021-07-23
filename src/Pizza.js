// How individual pizzas display on the DOM after submissions
import React from 'react'

function Pizza({ details }) {
    if (!details) {
        return <h3>Fetching pizzas...</h3>
    }

    return (
        <div className='pizzas-container'>
            <p>Name: {details.name}</p>
        </div>
    )
}

export default Pizza