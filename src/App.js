import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items

// redux stuff
import {createStore} from 'redux'

import {reducer,initialStore} from './reducer'
import {Provider} from 'react-redux'





//initial store


///reducer

const store=createStore(reducer)




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
