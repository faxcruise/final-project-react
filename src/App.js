import React, { Component } from 'react';
import Login from './component/Login'
import Home from './component/Home'
import NavBar from './component/organism/NavBar'
import LoginMenu from './component/LoginMenu'
import MainMenu from './component/MainMenu'
import { BrowserRouter, Route } from 'react-router-dom'
//Reducer
import {Provider} from 'react-redux'
import myStore from './component/config/Strore'
class App extends Component {
  render() {
    return (
      <Provider store={myStore}>
        <BrowserRouter>
          <div>
            <NavBar></NavBar>      
            <div>
              <Route exact path="/" component={Login} />
              <Route path="/home" component={Home} />
            </div>            
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}

export default App;