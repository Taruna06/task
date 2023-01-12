import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import axios from 'axios';

const url = 'https://solitary-brook-02993.pktriot.net/user/login';

//https://solitary-brook-02993.pktriot.net/user/signup
//https://damp-mountain-43134.pktriot.net/auth/login

function BasicExample() {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("H")
    try{
      const rep= await axios.post(url, {email:email, password:password});
      console.log(rep.data);
    }catch(error){
      console.log("ERROR");
      console.log(error.response);
    }
    console.log(email,password);
  };

  return (
    <>

   <div className='align-items-center main'>
   <Container className="d-flex vh-100 back">
  <Row className="m-auto align-self-center">
    <Col>
   <Card className="card-component">
    <div className="heading centered-div title title-2">Login</div>
    <fetchApi/>
    <div className='centered-div'>
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email}
            onChange={(e) => setemail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password}
            onChange={(e) => setpassword(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
      </Form.Group>
      <div class="col-md-12 text-center"> 
      <Button variant="primary" type="submit">
        Submit
      </Button>
      </div>
    </Form>
    </div>
    <div className='centered-div'>
    <ul>
            <li>
              <Link to="/sign">New User? Sign Up</Link>
            </li>
            <li>
              <Link to="/">Back to Home</Link>
            </li>
          </ul>
          
    </div>
    </Card>
    </Col>
    </Row>
    </Container>
    </div>
 </>
  );
}

export default BasicExample;
