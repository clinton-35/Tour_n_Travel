import React,{ useContext, useState} from 'react'
import { Container, Row, Col, Button, Form} from 'react-bootstrap';
import { AuthContext } from './components/context/Authcontext';

const Register = () => {
    const {register} = useContext(AuthContext)
  const [username, setUsername] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
    

    const handleSubmit = (event) => {
      event.preventDefault();
      // Your submit logic here
      register(username,email,password)
    };
  return (
    <div className='register'>
        <Container className="py-5 mt-5">
            <Row className="justify-content-center mt-5">
                <Col xs={11} sm={10} md={8} lg={4} className={`p-4 rounded `}>
                    <h1 className={`text-center border-bottom pb-3 `}>
                        Create Account
                    </h1>
                    <Form onSubmit={handleSubmit}>
                        
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" onChange={(e)=> setEmail(e.target.value) } placeholder="Email" required />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Username</Form.Label>
                            <Form.Control name="username" type="text" onChange={(e)=> setUsername(e.target.value) } placeholder="Username"  required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name="password" type="password" onChange={(e)=> setPassword(e.target.value) } placeholder="Password"  required />
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