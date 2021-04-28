import {DECREASE,INCREASE,CLEAR_CART,REMOVE,GET_TOTALS} from './actions'
export default function reducer(state,action){
    
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
        let tempCart=state.cart.map(item=>item.id===action.payload.id?{...item,amount:item.amount>0?item.amount-1:0}:item)
        .filter(item=>item.amount!==0)
        return {...state,cart:tempCart}
      }
      case GET_TOTALS:{
        return {...state,total:state.cart.reduce((sum,item)=>sum+(item.amount*item.price),0).toFixed(2)}
      }      
       default:{
         return state
       }
     }
   }