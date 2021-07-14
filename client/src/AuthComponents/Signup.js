import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../Contexts/AuthContext";
import { Link, useHistory } from "react-router-dom";
import db from "../firebase";
import './SignupStyle.scss';

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const nameRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      const auth = await signup(emailRef.current.value, passwordRef.current.value)
      auth.user.updateProfile({
        displayName: nameRef.current.value
      })
      db.collection('users').doc(auth.user.uid)
      .set({
        name: nameRef.current.value, 
        email: emailRef.current.value,
        id:auth.user.uid
      }).then(() => {
        history.push("/calendar")
      } )
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <div>
    <div className = 'sign-page_container'>
        <div className = 'sign-page_login_box' >
        <div className = 'sign-page_logo_container' ></div>
        <Card>
        <Card.Body>
          <h1 className="class">Sign Up</h1>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
          <Form.Group id="name">
          <br></br>
              <Form.Label>Full Name: </Form.Label>
              <Form.Control type="text" ref={nameRef} required />
            </Form.Group>
            <Form.Group id="email">
            <br></br>
              <Form.Label>Email: </Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
            <br></br>
              <Form.Label>Password: </Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group id="password-confirm">
            <br></br>
              <Form.Label>Confirm Password: </Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>

            <Button disabled={loading} className="button" type="submit">
              Sign Up
            </Button>
          </Form>
          <div className="signupbutton"><h3 className="h3-style">
        Already have an account? <Link to="/login">Log In</Link></h3>
      </div>
        </Card.Body>
      </Card>
      
      </div></div> 
    </div>
  )
}