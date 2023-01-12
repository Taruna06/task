import {  Link } from "react-router-dom";
import './common.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function BasicExample3() {
    return (
      <>
      {/* <div className="main">
        <row className="m-auto align-self-center">
        <Card style={{ width: '18rem' }}>

        
      <div className="centered-div home-div">Home</div>
      <div className="centered-div navigation"> <nav>
          <ul>
            <li>
              <Link to="/login">Already Registered? Login</Link>
            </li>
            <li>
              <Link to="/sign">New User? Sign Up</Link>
            </li>
          </ul>
        </nav>
        <Outlet />
        </div>
        
        </Card>
        </row>
        </div> */}
        <div className="main d-flex">
<Container className="d-flex vh-100 back">
  <Row className="m-auto align-self-center">
    <Col>
      <Card className="card-component home-card">
          <Card.Title className="m-auto align-self-center title">Welcome</Card.Title>
        <Card.Text>
        <nav>
          <ul>
            <li>
              <Link to="/login">Already Registered? Login</Link>
            </li>
            <li>
              <Link to="/sign">New User? Sign Up</Link>
            </li>
            <li>
              <Link to="/fetchapi">fetchApi</Link>
            </li>
          </ul>
        </nav>
        <div>
          

        </div>
      

        </Card.Text>
      </Card>
    </Col>
  </Row>
</Container>
</div>

      </>
    );
  }
  
  export default BasicExample3;