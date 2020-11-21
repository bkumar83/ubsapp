//import logo from './logo.svg';
import React from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
 import Items from '../Items/Items';
 import ItemsList from '../Itemslist/ItemsList';
 /**
 * @desc This is the main container page, having routes to show any component as a part of it. 
  */
class  App extends React.Component {

  render(){
    return (
      <Router>
        <div className="app">
            
            <Switch>
              <Route exact path="/" component={ItemsList} />
              <Route  path="/selItem" component={Items}/>
             </Switch>
        </div>
      </Router>
    );
  }
}

export default  App;
