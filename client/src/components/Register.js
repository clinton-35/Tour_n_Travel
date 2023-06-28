import React,{ useContext, useState} from 'react'
import { Container, Row, Col, Button, Form, Spinner} from 'react-bootstrap';


const Register = () => {
   
    


  return (
    <div className='register'>
        <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded `}>
                    <h1 className={`text-center border-bottom pb-3 `}>
                        Create Account
                    </h1>
                    <Form >
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" onChange={(e)=> (e.target.value) } placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" type="text" onChange={(e)=> (e.target.value) } placeholder="Username"  required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" onChange={(e)=> (e.target.value) } placeholder="Password"  required />
                        </Form.Group>
                        <Button
                            type="submit"
                            className={`m-auto d-block`}
                            
                            style={{border: 0}}
                        >
                        Sign up
                        </Button>
                    </Form>
                </Col>
            </Row>
       </Container>
    </div>
  )
}

export default Register