import {DECREASE,INCREASE,CLEAR_CART} from './actions'
export default function reducer(state,action){
    
     switch(action.type){
      case CLEAR_CART:{
        return {...state,cart:[]}
      }
       default:{
         return state
       }
     }
   }