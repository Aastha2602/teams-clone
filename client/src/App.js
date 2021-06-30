import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react"
import Calendar from './pages/Calendar/Calendar.js';
import Header from './components/Header/Header.js';
import Msg from '././pages/Msg/Msg.js';
import PrivateRoute from "./AuthComponents/PrivateRoute.js";
import Dashboard from "./AuthComponents/Dashboard"
import Login from "./AuthComponents/Login"
import { AuthProvider } from "./Contexts/AuthContext.js";
import Call from "./pages/Call/Call.js";

 
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AuthProvider>
          <Switch>
            <PrivateRoute exact path="/calendar" component={Calendar} />
            <PrivateRoute exact path="/chat" component={Msg} />
            <PrivateRoute exact path="/" component={Login} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/call" component={Call} />

          </Switch>
          </AuthProvider>
      </Router>
    </div>
  );
}
 
export default App;
