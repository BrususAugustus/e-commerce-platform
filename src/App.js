import "./App.css";
import React from "react";
import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import {auth} from "./components/firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();
    
    this.state={
      currentUser:null
    }
  };

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user=>{
      this.setState({currentUser:user});
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.currentUser.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route path="/signin" component ={SignInAndSignUpPage} />
          <Route path="/shop" component={ShopPage}/>
        </Switch>
      </div>
    );
  }

}

export default App;
