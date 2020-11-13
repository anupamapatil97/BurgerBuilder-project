import React, { Component } from 'react';
import Layout from './Components/Layout/Layout';
import BurgerBuilder from './Containers/BurgerBuilder/BurgerBuilder';
import Checkout from './Containers/Checkout/Checkout';
import {Route, Switch} from "react-router-dom"
import Orders from './Containers/Orders/Orders';
class App extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
            {/* <h1>I am app</h1> */}
            <Layout>
                <Switch><Route path="/" exact component={BurgerBuilder}/>
            <Route path="/checkout" exact component={Checkout}/>
            <Route path="/orders" component={Orders}/>
            </Switch>
            </Layout>
            </div>
         );
    }
}
 
export default App;