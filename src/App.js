import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './stylesheets/styles.scss';
import Header from './components/layout/header/Header';
import Main from './components/layout/body/Main';
import Footer from './components/layout/footer/Footer';
/* Pages */
import Home from './components/pages/Home';
import WhyDeluxe from './components/pages/WhyDeluxe';
import HowItWorks from './components/pages/HowItWorks';
import BuildYourTeam from './components/pages/BuildYourTeam';
import Learn from './components/pages/Learn';
import Careers from './components/pages/Careers';
import ContactUs from './components/pages/ContactUs';
import AboutUs from './components/pages/AboutUs';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/why-deluxe' component={WhyDeluxe} />
            <Route path='/how-it-works' component={HowItWorks} />
            <Route path='/build-your-team' component={BuildYourTeam} />
            <Route path='/learn' component={Learn} />
            <Route path='/careers' component={Careers} />
            <Route path='/about-us' component={AboutUs} />
            <Route path='/contact-us' component={ContactUs} />
          </Switch>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
