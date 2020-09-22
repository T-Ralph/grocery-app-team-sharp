//CSS Import
import './index.css';



//Library Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// Component Imports
import Nav from './components/Nav';
import Home from './components/Home';
import RecipeList from './components/RecipeList';
import RecipePage from './components/RecipePage';
import ShoppingList from './components/ShoppingList';
import AboutUs from './components/AboutUs';
import SignIn from './components/SignIn';
import Footer from './components/Footer';

// Importing Reducer, Defining Store, & Adding Redux DEVTOOLs Browser Compatability
import allReducers from './reducers/index';
const store = createStore(
  allReducers,
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
      <Route path='/recipe-page' component={RecipePage} />
      <Route path='/shopping-list' component={ShoppingList} />
      <Route path='/about-us' component={AboutUs} />
      <Route path='/sign-in' component={SignIn} />
      <Footer />
    </Router>
  </Provider>,
  document.getElementById('root')
);
