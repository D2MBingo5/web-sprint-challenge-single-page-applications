// Dependency imports
import React, { useState, useEffect } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import { reach } from 'yup'

// File imports
import Form from './Form'
import schema from './formSchema'
import Pizza from './Pizza'

// Pizza Form initial states
const initialFormValues = {
  name: '',
  size: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false,
}
const initialFormErrors = {
  name: '',
  size: ''
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
    axios.post('https://reqres.in/api/orders', newPizza)
      .then(res => {
        setPizzas([...pizzas, res.data])
      })
      .catch(err => {console.log(err)})
      .finally(() => {setFormValues(initialFormValues)})
  }

  const validate = (name, value) => {
    reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

  const inputChange = (name, value) => {
    validate(name, value)
    setFormValues({ ...formValues, [name]: value })
  }

  const formSubmit = () => {
    const newPizza = {
      name: formValues.name.trim(),
      size: formValues.size.trim(),
      topping1: formValues.topping1 ? 'Yes' : 'No',
      topping2: formValues.topping2 ? 'Yes' : 'No',
      topping3: formValues.topping3 ? 'Yes' : 'No',
      topping4: formValues.topping4 ? 'Yes' : 'No'
    }
    postNewPizza(newPizza)
  }

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

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
          <Link to='/cart'>
            <button id='cartBtn'>Your Cart</button>
          </Link>
        </div>        
      </Route>

      <Route exact path='/pizza'>
        <div>
          <h2>Build Your Own Pizza</h2>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/cart'>
            <button id='cartBtn'>Your Cart</button>
          </Link>
          <Form 
            values={formValues}
            submit={formSubmit}
            change={inputChange}
            disabled={disabled}
            errors={formErrors}
          />
        </div>
      </Route>

      {/* Create a Your Cart route that displays the api call */}
      <Route path='/cart'>
        <div>
          <h2>Your Cart of Created Pizzas</h2>
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/pizza'>
            <button id='order-pizza'>Pizza?</button>
          </Link>
          {
            pizzas.map(pizza => {
              return (
                <Pizza key={pizza.id} details={pizza} />
              )
            })
          }
        </div>
      </Route>
    </Switch>        
  );
};
export default App;
