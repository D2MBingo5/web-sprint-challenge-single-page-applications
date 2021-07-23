import React from "react";

import { Route, Switch, Link } from 'react-router-dom'

const App = () => {
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
        </div>
      </Route>
    </Switch>
        


  );
};
export default App;
