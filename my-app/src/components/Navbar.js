import React from "react";
import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {NavLink} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

// function BasicExample() {
//   return (
//     <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="light">
//       <Container>
//         <NavLink to="/home" className="no-underline"><Navbar.Brand>Nathan Limono</Navbar.Brand></NavLink>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto" style={{marginRight:"0px"}}>
//             <NavLink to="/home">Home</NavLink>
//             <NavLink to="/portfolio">Portfolio</NavLink>
//             <NavLink to=""></NavLink>
//             <NavLink to="/lecture">Lecture Material</NavLink>
//             {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">
//                 Another action
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">
//                 Separated link
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }
function BasicExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" data-bs-theme="light">
      <Container>
        <NavLink to="/home" className="no-underline"><Navbar.Brand>Nathan Limono</Navbar.Brand></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" style={{marginRight:"0px"}}>
            <NavLink className="no-underline nav-link" to="/home">Home</NavLink>
            <NavLink className="no-underline nav-link" to="/portfolio">Portfolio</NavLink>
            <NavLink className="no-underline nav-link" to="/lecture">Lecture Material</NavLink>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;