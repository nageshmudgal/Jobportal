import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom'

function BasicExample(props) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="../">Job Portal</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto text-white" >
            {
              props.Links && props.Links.map((d,i)=>{
                return(
                  <>
                  <Nav.Link><Link style={{color:'gray'}} to={d.link}>{d.linkdis}</Link></Nav.Link>
                  
                  </>
                );
              })
            }
            
            
            <NavDropdown title="Login" id="basic-nav-dropdown" className='text-black bg-white'>
              <NavDropdown.Item className=''  href="../user/login" >User</NavDropdown.Item>
              <NavDropdown.Item href="../employer/login">Company</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Register" id="basic-nav-dropdown" style={{ color: 'white' }}>
              <NavDropdown.Item href="../user/register">User</NavDropdown.Item>
              <NavDropdown.Item href="../employer/register">Company</NavDropdown.Item>
            </NavDropdown>



          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;