import "./App.css";
import React from "react";
import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { Route, Switch } from "react-router-dom";
import Header from "./components/header/header.component";
import {auth, createUserProfileDocument} from "./components/firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();
    
    this.state={
      currentUser:null
    }
  };

  unsubscribeFromAuth = null;
  
  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user=>{
      createUserProfileDocument(user);
      this.setState({currentUser:user});
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.currentUser.unsubscribeFromAuth(userAuth=>{
      if(userAuth){
        const userRef = createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot=>{
          this.setState(
            {
              currentUser:{
                id: snapshot.id,
                ...snapshot.data()
              }
            }
          )
        })
      }
      else{
        this.setState({currentUser:userAuth})
      }
    });
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
