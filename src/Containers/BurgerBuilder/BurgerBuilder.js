import React, { Component } from 'react';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Burger from '../../Components/Burger/Burger';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import Modal from '../../Components/UI/Modal/Modal';
import Aux from "../../hoc/Auxx";
import axios from "../../axios-orders"
import Spineer from '../../Components/Spinner/Spineer';

const INGREDIENT_PRICES={
        salad:0.5,
        cheese:0.4,
        meat:1.3,
        bacon:0.7}
class BurgerBuilder extends Component {
    state = { 
        ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice:4,
        purchasable:false,
        purchasing:false,
        loading:false
     }

purchaseHandler=()=>{
    this.setState({purchasing:true})
}
purchaseCancelHandler=()=>{
    this.setState({purchasing:false})
}
purchaseContinueHandler=()=>{
    // alert("you Continued")
    // this.setState({loading:true})
    // const order={
    //     ingredient:this.state.ingredient,
    //     price:this.state.totalPrice,
    //     customer:{
    //         name:"aaaa",
    //         address:{
    //             streets:"aabbcc",
    //             zipcode:"125513",
    //             country:"india"
    //         },
    //         email:"dummy@gmail.com",

    //     },
    //     delivery:"fastest"
    // }
    // axios.post("/orders.json",order).then(response=>{
    //     console.log(response);
    //     this.setState({loading:false, purchasing:false})
    // }).catch(err=>{
    //     console.log(err);
    //     this.setState({loading:false,purchasing:false})
    // });
    const queryParams=[];
    for(let i in this.state.ingredient){
        queryParams.push(encodeURIComponent(i)+"="+encodeURIComponent(this.state.ingredient[i]))
    }
    queryParams.push("price="+this.state.totalPrice)
    const queryString=queryParams.join('&')
    this.props.history.push({
        pathname:"/checkout",
        search:"?" +queryString
    })

}
     updatePurchasable(ingredient){
        //  const ingredient={
        //      ...this.state.ingredient
        //  };
         const sum=Object.keys(ingredient).map(igKey=>{
             return ingredient[igKey]
         }).reduce((sum,el)=>{
            return sum + el;
         },0);
         this.setState({purchasable:sum>0});
     }

     addingredientHandler=(type)=>{
        const oldCount=this.state.ingredient[type];
        const updatedCount=oldCount+1;
        const updatedIngredient={
            ...this.state.ingredient
        }
        updatedIngredient[type]=updatedCount;
        const priceAddition=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice+priceAddition;
        this.setState({totalPrice:newPrice,ingredient:updatedIngredient})
        this.updatePurchasable(updatedIngredient);

     }
     removeIngridentHandler=(type)=>{
        const oldCount=this.state.ingredient[type];
        if(oldCount<=0){
            return;
        }
        const updatedCount=oldCount-1;
        const updatedIngredient={
            ...this.state.ingredient
        }
        updatedIngredient[type]=updatedCount;
        const priceDeduction=INGREDIENT_PRICES[type];
        const oldPrice=this.state.totalPrice;
        const newPrice=oldPrice- priceDeduction;
        this.setState({totalPrice:newPrice,ingredient:updatedIngredient});
        this.updatePurchasable(updatedIngredient);
     }
    render() { 
        const disableInfo={
            ...this.state.ingredient
        };
        for(let key in disableInfo){
            disableInfo[key]=disableInfo[key]<=0
        }
        let orderSummary=  <OrderSummary ingredient={this.state.ingredient}
        purchaseCanceled={this.purchaseCancelHandler}
        purchaseContinued={this.purchaseContinueHandler}
        price={this.state.totalPrice.toFixed(2)}
        />
        if(this.state.loading){
            orderSummary=<Spineer/>
        }
        return ( 
            <Aux>

                <Modal show={this.state.purchasing} modelClosed={this.purchaseCancelHandler}>
                    {/* <OrderSummary ingredient={this.state.ingredient}
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    price={this.state.totalPrice.toFixed(2)}
                    /> */}
                    {orderSummary}
                    
                </Modal>
                {/* <div> Burger  </div>         
                <div> Build Control </div>  */}
                <Burger ingredient={this.state.ingredient}/>        
                <BuildControls
                ingredientAdded={this.addingredientHandler}
                ingredientRemoved={this.removeIngridentHandler}
                disabled={disableInfo}
                price={this.state.totalPrice}
purchasable={this.state.purchasable}
ordered={this.purchaseHandler}
                />

            </Aux>
         );
    }
}
 
export default BurgerBuilder;