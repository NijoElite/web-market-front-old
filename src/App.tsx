import React, {Component} from 'react';
import {Header} from './components/Header/Header.component';
import {IndexPage} from './pages/IndexPage/IndexPage.component';
import {Page} from './pages/Page.component';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


export default class App extends Component {

  render() {
    return (
      <Router>
        <Header/>
        <Page>
          <Switch>
            <Route path='/catalog'>
              lol
            </Route>

            <Route path='/' exact component={IndexPage}/>
          </Switch>
        </Page>
      </Router>
    );
  }
}
