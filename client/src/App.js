import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react"
import Calendar from './pages/Calendar/Calendar.js';
import Header from './components/Header/Header.js';
import './App.css';
import Chat from '././Chat.js';
 
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
            <Route exact path="/calendar">
              <Calendar />
            </Route>

            <Route exact path="/chat">
              <Chat />
            </Route>

          </Switch>
      </Router>
    </div>
  );
}
 
export default App;
