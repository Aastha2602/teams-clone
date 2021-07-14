import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react"
import Calendar from './pages/Calendar/Calendar.js';
import Header from './components/Header/Header.js';
import Msg from '././pages/Msg/Msg.js';
import PrivateRoute from "./AuthComponents/PrivateRoute.js";
import Login from "./AuthComponents/Login"
import { AuthProvider } from "./Contexts/AuthContext.js";
import Call from "./pages/Call/Call.js"; 
import Signup from "./AuthComponents/Signup.js";
import Container from "./components/Whiteboard/Container/Container.js";
import VoiceText from "./pages/VoiceText/VoiceText.js";
import ChatRooms from "./components/Chat/ChatRooms.js";
import MainPage from "./pages/MainPage/MainPage.js";
import Dashboard from './AuthComponents/Dashboard.js'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AuthProvider>
          <Switch>
          <PrivateRoute exact path="/dash" component={Dashboard} />
            <Route exact path="/" component={MainPage} />
            <PrivateRoute exact path="/voiceText" component={VoiceText} />
            <PrivateRoute exact path="/whiteboard" component={Container} />
            <PrivateRoute exact path="/calendar" component={Calendar} />
            <PrivateRoute exact path="/chat/:roomId?" component={Msg} />
            <Route path="/login" component={Login} />
            <PrivateRoute exact path="/call" component={Call} />
            <Route path="/signup" component={Signup} />
            <PrivateRoute exact path="/chats/:roomId?" component={ChatRooms} />
          </Switch>
          </AuthProvider>
      </Router>
    </div>
  );
}
 
export default App;
