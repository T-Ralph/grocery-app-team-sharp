//CSS Import
import './index.css';

//Library Imports
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

// Component Imports
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Home from './components/Home';
import Nav from './components/Nav';
import RecipeList from './components/RecipeList';
import ShoppingList from './components/ShoppingList';

// Importing Reducer, Defining Store, & Adding Redux DEVTOOLs Browser Compatability
import allReducers from './reducers/index';
import loginReducer from'./reducers/loginReducer';
const store = createStore(
  loginReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

//Ensuring Store Works
store.subscribe(() => console.log(store.getState()));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Nav />
      <Route path='/' component={Home} exact />
      <Route path='/recipe-list' component={RecipeList} />
      <Route path='/shopping-list' component={ShoppingList} />
      <Route path='/about-us' component={AboutUs} />
      <Footer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
