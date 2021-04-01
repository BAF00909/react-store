import React from 'react';
import {HomePage, CartPage} from '../pages';
import {Route, Switch} from 'react-router-dom';

const App = () => {

    return (
        <div className="app">
           <Switch>
               <Route path="/" exact component={HomePage} />
               <Route path="/cart" component={CartPage} />
               <Route render={()=>{return <h2>404 page not found</h2>}}/>
           </Switch>
        </div>
    );
}

export default App;