import React from 'react';

import './App.css';
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Our from './pages/Our'
import Menu from './pages/Menu'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Blog from './pages/Blog'
import Singlepage from './pages/Singlepage'
import addProduct from './pages/addProduct'
import Update from './pages/Update'
import Footer from './components/Footer';
import Header from './components/Header';
import cart from './cart'
import tab from './tab'
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>

    <Header/>
    
      <Switch>

      <Route exact  path='/' component={Home} />
      <Route   path='/add' component={addProduct} />
      <Route   path='/cart' component={cart} />

      <Route path='/update/:id' component={Update}/>


      <Route path='/about' component={About}/>
      <Route path='/services' component={Services}/>
      <Route path='/our' component={Our}/>
      <Route path='/menu' component={Menu}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/login' component={Login}/>
      <Route path='/signup' component={Signup}/>
      <Route path='/blog' component={Blog}/>
      <Route path='/updateDetails' component={Singlepage}/>
      <Route path='/admin' component={tab}/>



      </Switch>

    

    <Footer/>

      </Router>
     
    
    </div>

  )
}
    
 
     

export default App;
