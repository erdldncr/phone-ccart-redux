import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux stuff
import {createStore} from 'redux'
import {DECREASE,INCREASE} from './actions'
import reducer from './reducer'
import {Provider} from 'react-redux'





//initial store
const initialStore={
  cart:cartItems,
  total:0,
  amount:5

}

///reducer

const store=createStore(reducer,initialStore)
const {getState,dipatch}=store



function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar  />
      <CartContainer />
    </Provider>
  );
}

export default App;
