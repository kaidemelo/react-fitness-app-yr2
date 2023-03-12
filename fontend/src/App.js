//Imports
import {Component, React, useState} from 'react';
import './App.css';
import Home from './components/Pages/HomePage/Home';
import SignUp from './components/Pages/SignUp/SignUp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Testimonials from './components/Pages/Testimonials/Testimonials';
import HowItWorks from './components/Pages/HowItWorks/HowItWorks';
import ScrollToTop from 'react-router-scroll-top';
import TermsOfService from './components/Pages/TermsOfService/TermsOfService';
import Pricing from './components/Pages/PricingPage/PricingPage';
import Team from './components/Pages/Team/Team';
import Login from './components/Pages/Login/Login';
import PageNotFound from './components/Pages/404ErrorPage/404ErrorPage';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Axios from 'axios';
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  const [isAuth, setIsAuth] = useState(true)

  //Checks for express sessions (checks if user already has a session)
  Axios.defaults.withCredentials = true;
  return (
    <Router>
      <ScrollToTop>
      <Navbar />
      <Switch> {/* When wrapping routes in a switch component it will search through all the routes to check if the route exists. */}

        {/* Routes */}
        <Route path='/' exact component={Home} />
        <Route path='/sign-up' component={SignUp} />
        <Route path='/login' component={Login} />
        <Route path='/testimonials' component={Testimonials} />
        <Route path='/how-it-works' component={HowItWorks} />
        <Route path='/terms-of-service' component={TermsOfService} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/team' component={Team} />
        <ProtectedRoute path="/dashboard" component={Dashboard} isAuth={isAuth} />
        <Route component={PageNotFound} /> {/* If no route is found for the requested url load the 404 error page route. */}
        {/* Routes */}

      </Switch>
      <Footer />
      </ScrollToTop>
    </Router>
  );
}

export default App;
