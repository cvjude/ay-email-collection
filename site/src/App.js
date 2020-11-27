import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './views/MainPage';
import Report from './views/Report';
import logo from './assets/logo.svg';
import Privacy from './views/PrivacyPolicy';
import './App.scss';

const App = () => {
  return (
    <section className="main_sec">
      <nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </nav>
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/view-all-reports-ay" component={Report} />
          <Route exact path="/privacy-policy" component={Privacy} />
        </Switch>
      </Router>

      <div className="small">
        <small>powered by Jude chinoso</small>
        <small>jjchinosoviolet@gmail.com</small>
        <small>view my projects at https://github.com/cvjude</small>
      </div>
    </section>
  );
};

export default App;
