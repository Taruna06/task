import { Component, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './common.css';
import { Outlet, Link } from "react-router-dom";
import InputGroup from 'react-bootstrap/InputGroup';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import axios from 'axios';

// function BasicExample2() {
//   const [fName, setFName] = useState('')
//   const [lName, setLName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   // console.log({ email, password })
//   const handleFName = (e) => {
//     setFName(e.target.value)
//   }
//   const handleLName = (e) => {
//     setLName(e.target.value)
//   }
//   const handleEmail = (e) => {
//     setEmail(e.target.value)
//   }
//   const handlePassword = (e) => {
//     setPassword(e.target.value)
//   }

//   const handleApi = (e) => {
//     e.preventDefault()
//     console.log({ fName, lName, email, password })
//     axios.post('https://damp-mountain-43134.pktriot.net/auth/register', {
//       username:fName,
//       lastname:lName,
//       email: email,
//       password: password
//     }).then(result => {
//       console.log(result.data)
      
//     })
//       .catch(error => {
//         alert('service error')
//         console.log(error)
//       })
//   }
const url = 'https://solitary-brook-02993.pktriot.net/user/signup';

const BasicExample2 = () => {
  // const [userName, setUserName] = useState('');
  const [firstname, setfirstname] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const rep= await axios.post(url, {firstname:firstname, lastname:lastname,email:email, password:password});
      console.log(rep);
    }catch(error){
      console.log("ERROR");
      console.log(error.response);
    }
    console.log(firstname,lastname, email,password);
  };

  return (
    <>
    <div className='align-items-center main'>
   <Container className="d-flex vh-100 back">
  <Row className="m-auto align-self-center">
    <Col>
   <Card className="card-component" style={{width:"35rem"}}>
    <div className='centered-div'>
        <row className="heading title title-2">Sign Up</row>
        </div>
        <div className='centered-div'>
<Form onSubmit={handleSubmit}>
<InputGroup className="mb-3">
      <InputGroup.Text>First name</InputGroup.Text>
      <Form.Control aria-label="First name" value={firstname}
            onChange={(e) => setfirstname(e.target.value)} />
    </InputGroup>
    <InputGroup className="mb-3">
      <InputGroup.Text>Last name</InputGroup.Text>
      <Form.Control aria-label="Last name" value={lastname}
            onChange={(e) => setlastname(e.target.value)}/>
    </InputGroup>

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
            <Link to="/login">Already Registered? Login</Link>
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

export default BasicExample2;
