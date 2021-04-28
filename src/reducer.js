import {DECREASE,INCREASE,CLEAR_CART,REMOVE,GET_TOTALS,TOGGLE_AMOUNT} from './actions'
import cartItems from './cart-items'

export const initialStore={
  cart:cartItems,
  total:0,
  amount:0

}
export  function reducer(state=initialStore,action){
    
     switch(action.type){
      case CLEAR_CART:{
        return {...state,cart:[]}
      }
      case REMOVE:{
        return {...state,cart:state.cart.filter(item=>item.id!==action.payload)}
      }
      case INCREASE:{
        let tempCart=state.cart.map(item=>item.id===action.payload.id?{...item,amount:item.amount+1}:item
        )
        
        return {...state,cart:tempCart}
      }
      case DECREASE:{
        let tempCart=state.cart.map(item=>item.id===action.payload.id?{...item,amount:item.amount-1}:item)
        
        return {...state,cart:tempCart}
      }
      case GET_TOTALS:{
        return {...state,total:state.cart.reduce((sum,item)=>sum+(item.amount*item.price),0).toFixed(2)}
      }
      case TOGGLE_AMOUNT:{
 
        return {...state,cart:state.cart.map(item=>{
            if(item.id===action.payload.id){
               if(action.payload.toggle==='increase'){
                return {...item,amount:item.amount+1}
               }
               if(action.payload.toggle==='decrease'){
                return {...item,amount:item.amount-1}
               }
            }else{

          return item
        }

      })}}     
       default:{
         return state
       }
     }
   }