import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link,useHistory } from "react-router-dom";
import LoginStyle from './LoginStyle.scss';

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/calendar")
    } catch {
      setError("Failed to log in")
    }
    setLoading(false)
  }

  return (
    <div >
    <div className = 'login-page_container'>
        <div className = 'login-page_login_box' >
        <div className = 'login-page_logo_container' >
        <Card>
        <Card.Body>
          <h1 className="abcd">Login Form..</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
            <br></br>
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
      
            <Button disabled={loading} className="button" type="submit">
              Log In
            </Button>
            </Form>
          <div className="signup-button" ><h3 className="h3-style">
            Need an account? <Link to="/signup">Sign Up Here</Link></h3>
          </div>
          </Card.Body>
        </Card>
        </div>
        </div> </div>
    </div>
  )
}
