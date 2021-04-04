import React from 'react';
import {HomePage, CartPage} from '../pages';
import {Route, Switch} from 'react-router-dom';
import ShopHeader from '../shop-header';

const App = () => {

    return (
        <main className="container" role="main">
            <ShopHeader numItems={5} total={216}/>
            <Switch>
               <Route path="/" exact component={HomePage} />
               <Route path="/cart" component={CartPage} />
               <Route render={()=>{return <h2>404 page not found</h2>}}/>
            </Switch>
        </main>
    );
}

export default App;