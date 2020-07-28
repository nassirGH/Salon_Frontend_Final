import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import Home from './components/home';
import Contact from './components/contact';
import Spa from './components/services/spa';
import Salon from './components/services/salon';
import Massage from './components/services/massage';
import Barber from './components/services/barber';
import MedicalEsthetics from './components/services/medical-esthetics';
import Team from './components/team';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <div id="page">
            <Route  exact path="/" component={Home} />
            <Route  path="/contact" component={Contact} />
            <Route  path="/services/spa" component={Spa} />
            <Route  path="/services/salon" component={Salon} />
            <Route  path="/services/massage" component={Massage} />
            <Route  path="/services/barber" component={Barber} />
            <Route  path="/team" component={Team} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
