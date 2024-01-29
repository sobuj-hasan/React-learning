import React, { Component } from 'react'
import HomePage from "./HomePage";
import LoginPage from "./LoginPage";

class Web extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        isLoggedIn : true
      }
    }

    render (){
      const {isLoggedIn} = this.state

      // let element;
      // element = isLoggedIn ? <HomePage /> : <LoginPage />

      // if (isLoggedIn) {
      //   element = <HomePage />;
      // } else {
      //   element = <LoginPage />;
      // }

      return <div>{isLoggedIn ? <HomePage /> : <LoginPage />}</div>;
    }

}

export default Web
