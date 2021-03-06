import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route} from "react-router-dom";
import Header from './componets/Header';
import styled from 'styled-components';
import Sidebar from './componets/Sidebar';
import Chat from './componets/Chat';

function App() {
  return (
    <div className="App">
      <Router>
        <>
        <Header />
          <AppBody>
            <Sidebar/>
          <Switch>
            <Route path="/">
              <Chat/>
            </Route> 
          </Switch>
          </AppBody>

        </>
      </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
  display: flex;
  height: 100vh;
`;
