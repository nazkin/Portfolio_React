import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import HomePage from './pages/HomePage/HomePage';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import './App.css';


// ---------------------------------
import Footer from './components/Footer/Footer';

class App extends Component {
  constructor(props){
    super(props);
  }

  state = {
  links: [
    {name:"Home", url:"/"},
    {name:"About", url:"/about"},
    {name :"Contact", url : "/contact"}
  ], 
  about: {
    title: "Who is Naz ???"
    
  }, 
  contact: {
    title: "Leave your info, Let's Chat"
  }, 
  home: {
    title: "Everything I Do Matters Every Project ... Every Detail ... Every Time !!!",
    subtitle: "Making a Difference 1 Project At a Time..."
  }
};

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar className="border-bottom mb-3" variant="dark" bg="dark" expand="md">
            <Navbar.Brand href="#home">Nazar's</Navbar.Brand>
            <Navbar.Toggle aria-controls="toggle-navbar" />
            <Navbar.Collapse id="toggle-navbar">
            <Nav className="ml-auto">
              <Link className="nav-link" to = "/" >Home</Link>
              <Link className="nav-link" to = "/about" >About</Link>
              <Link className="nav-link" to = "/contact" >Contact</Link> 
            </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route path="/" exact render={()=> <HomePage title     = {this.state.home.title} 
                                                       subtitle  = {this.state.home.subtitle}/>}/>
          <Route path= "/about"  render={()=> <About title     = {this.state.about.title}  />} />
          <Route path= "/contact"  render={()=> <Contact title     = {this.state.contact.title}  />} />
        </Router>
       
        
     

        <Footer />
      </div>
    );
  }
}

export default App;
