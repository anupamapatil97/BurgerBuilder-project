import React, { Component } from 'react';
import Button from '../../../Components/UI/Button/Button';
import "./ContactData.css"
import axios from "../../../axios-orders"
import Spineer from '../../../Components/Spinner/Spineer';
class ContactData extends Component {
    state = { 
        name:"",
        email:"",
        address:{
            street:"",
            postalCode:""
        },
        loading:false
     }
     orderHandler=(event)=>{
         event.preventDefault();
         console.log(this.props.ingredient);
         const order={ingredient:this.props.ingredient,
        price:this.props.price,
        customer:{
                    name:"aaaa",
                    address:{
                        streets:"aabbcc",
                        zipcode:"125513",
                        country:"india"
                    },
                    email:"dummy@gmail.com",
        
                },
                delivery:"fastest"
    
    }
     axios.post("/orders.json",order).then(response=>{
        console.log(response);
        this.setState({loading:false, purchasing:false})
        this.props.hostory.push("/");
    }).catch(err=>{
        console.log(err);
        this.setState({loading:false,purchasing:false})
    });
     }
    render() { 
      let form=(
            <form>
                <input type="text" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Email"/>
                <input type="text" name="street" placeholder="Your Street"/>
                <input type="text" name="postalCode" placeholder="Your PostalCode"/>
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
          );
        if(this.state.loading){
            form=<Spineer/>
        }
        return (  
            <div className="ContactData">
                <h4>Enter your contact data</h4>
            {form}
            </div>
        );
    }
}
 
export default ContactData;