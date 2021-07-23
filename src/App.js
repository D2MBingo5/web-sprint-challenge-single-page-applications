// Dependency imports
import React, { useState, useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import { reach } from 'yup'

// File imports
import Form from './Form'
import schema from './formSchema'

// Pizza Form initial states
const initialFormValues = {
  name: '',
}
const initialFormErrors = {
  name: '',
}
const initalPizzaOrders = []
const initialDisabled = true

const App = () => {
  // states
  const [pizzas, setPizzas] = useState(initalPizzaOrders)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewPizza = newPizza => {

  }

  return (
    <Switch>
      <Route exact path='/'>
        <div>
          <h1>Lambda Eats</h1>          
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/pizza'>
            <button id='order-pizza'>Pizza?</button>
          </Link>          
        </div>        
      </Route>

      <Route path='/pizza'>
        <div>
          <h2>Build Your Own Pizza</h2>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Form />
        </div>
      </Route>
      {/* Create a Your Cart route that displays the api call */}
    </Switch>        
  );
};
export default App;
