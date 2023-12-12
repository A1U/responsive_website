import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';

function CustomNavbar() {
  const buttonStyle = {
    backgroundColor: '#862634',
    color: '#fff',
    height: '50px',
    width: '100px',
    fontSize: '20px'
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary mb-5" style={{height:'80px'}}>
      <Container>
        <Navbar.Brand href="#home">
           <img src="/assert/logo.png" alt="logo" width="auto" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link href="#features" style={{color:'#862634'}}>Home</Nav.Link>
          
           
            <NavDropdown title="Why Bakeroo" id="collapsible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Workforce Management</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Inventory Management
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Order Management</NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.3">Order Management</NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.3">Production Sheet</NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.3">Work health Safety</NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.3">Food Safety</NavDropdown.Item>
            
              <NavDropdown.Item href="#action/3.3">E-Learning</NavDropdown.Item>
            
            
            </NavDropdown>
            <NavDropdown title="Resources" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Blog</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
               Academy
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ultimate Guide</NavDropdown.Item>
             </NavDropdown>
             <Nav.Link href="#pricing">Pricing</Nav.Link>
             <Nav.Link href="#contact">Contact</Nav.Link>
             <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
          <Nav>
          <Button style={buttonStyle} variant="secondary">Login</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomNavbar;

