import React, { useState } from "react";
import { Card, Button, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { useHistory } from "react-router-dom";
import './DashboardStyle.scss';
import logo from '../assets/logoutPage.gif';

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <div>
        <div className = 'board-page_container'>
        <div className = 'board-page_login_box' >
        <div ><img className="logo" src={logo}></img></div>
        <div className = 'board-page_logo_container' >
          <Card>
           <Card.Body>
            <h1 className="abc">Profile</h1>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email Logged-in: </strong> {currentUser.email}
            <Button className="logout" variant="link" onClick={handleLogout}>
              Log Out
            </Button>
           </Card.Body>
          </Card>
        </div>
        </div>
        </div>
    </div>
  )
}
