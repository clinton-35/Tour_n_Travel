import React, {useContext, useState } from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { VscKey } from 'react-icons/vsc';
import { Container, Row, Col, Button, Form, InputGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import {AuthContext} from './context/Authcontext'





const SignIn = () => {
  const {login} = useContext(AuthContext)
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  console.log(username)
  console.log(password)


  const handleSubmit = (event) => {
    event.preventDefault();
    // Your submit logic here
    login(username,password)
    
  };

  return (
    <div className='signin'>
      <Container className="py-5 mt-5">
        <Row className="justify-content-center mt-5">
          <Col xs={11} sm={10} md={8} lg={4}>
            <h1 className={`text-center border-bottom pb-3 `}>Sign in</h1>
            <Form onSubmit={handleSubmit}>
              <InputGroup className="mb-4 mt-5">
                <InputGroup.Text>
                  <AiOutlineUser size="1.8rem" />
                </InputGroup.Text>
                <Form.Control name="username" type="text" onChange={(e)=> setUsername(e.target.value) } placeholder="Username"  required />
              </InputGroup>
              
              <InputGroup className="mb-4">
                <InputGroup.Text>
                  <VscKey size="1.8rem" />
                </InputGroup.Text>
                <Form.Control name="password" type="password" onChange={(e)=> setPassword(e.target.value) } placeholder="Password"  required />
              </InputGroup>
              <Button type="submit" className={`m-auto d-block`} style={{ border: 0 }} >Log in</Button>              
              <Form.Group className="mt-3 text-center">
                <Form.Text className="text-muted fw-bold">Don't have an account?</Form.Text>
                <Row className="py-2 border-bottom mb-3" />
                <Link to="/register" className="btn btn-info rounded-0">
                  Create a Tour & Travel account
                </Link>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default SignIn;