import React from 'react';
import './App.css';
import Header from './app/components/Header/Header';
import Sidebar from './app/components/Sidebar/Sidebar';
import { Switch, Route } from 'react-router-dom';
import EmailList from './app/components/EmailList/EmailList';
import Mail from './app/components/Mail/Mail';
import SendMail from './app/components/SendMail/SendMail';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={EmailList} />
          <Route exact path="/mail" component={Mail} />
        </Switch>
      </div>
      <SendMail />
    </div>
  );
}

export default App;
