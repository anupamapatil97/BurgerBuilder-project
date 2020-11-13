import React, { Component } from 'react';
import {Route} from "react-router-dom"
import CheckoutSummary from '../../Components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
class Checkout extends Component {
    state = { 
        ingredient:{
            salad:1,
            meat:1,
            bacon:1,
            cheese:1
        },
        totalPrice:4,
     }
     componentDidMount(){
         const query=new URLSearchParams(this.props.location.search);
         const ingredient={};
         let price=0;
         for(let param of query.entries()){
             if(param[0]==="price"){
                 price=param[1]
             }
             else{
             ingredient[param[0]]=param[1]
             }
         }
         this.setState({ingredient:ingredient, totalPrice:price})
     }
     checkoutCancelHandler=()=>{
this.props.history.goBack();
     }
     checkoutContinueHandler=()=>{
        this.props.history.replace("/checkout/contact-data")
     }
    render() { 
        return ( 
            <div>
            <CheckoutSummary ingredient={this.state.ingredient}
            checkoutCancel={this.checkoutCancelHandler}
            checkoutContinue={this.checkoutContinueHandler}
       
            />
                 <Route path={this.props.match.path+"/contact-data"} render={((props)=>{
<ContactData ingredient={this.state.ingredient} price={this.state.totalPrice} {...props}/>
                 }
                 )}
                 />
            </div> 
        );
    }
}
 
export default Checkout;