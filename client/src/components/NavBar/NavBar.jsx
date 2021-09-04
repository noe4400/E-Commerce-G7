import React from "react";
import Login from "../Login/Login";
import LogOut from "../Login/LogOut";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  NavDropdown,
} from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";

import { useAuth0 } from "@auth0/auth0-react";
import SearchBar from "../SearchBar/SearchBar";
const NavBar = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <Navbar bg="dark" variant="dark" fixed="sticky">
      <Container>
        <Navbar.Brand href="#home">Logo</Navbar.Brand>
        <Nav className="justify-content-center">
          <Nav.Link href="#home">Categorias</Nav.Link>
          <Nav.Link href="#features">Hombre</Nav.Link>
          <Nav.Link href="#pricing">Mujer</Nav.Link>
          <Nav.Link href="#pricing">Ofertas</Nav.Link>
        </Nav>
        <Nav>
          <SearchBar />
        </Nav>
        <Nav className="justify-content-end align-items-center">
          <Nav.Item>
            <FaShoppingCart size="1.3rem" color="white" />
            <span class="badge">10</span>
          </Nav.Item>

          <NavDropdown
            title={
              isAuthenticated ? (
                <img
                  src={user.picture}
                  class="rounded-circle"
                  width="35"
                  alt={user.name}
                />
              ) : (
                <FaUser size="1.3rem" />
              )
            }
            id="nav-dropdown"
          >
            {isAuthenticated ? (
              <>
                <NavDropdown.Item eventKey="4.1">Perfil</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">Mis pedidos</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Lista de deseos
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  <LogOut />
                </NavDropdown.Item>
              </>
            ) : (
              <NavDropdown.Item eventKey="4.4">
                <Login />
              </NavDropdown.Item>
            )}
          </NavDropdown>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
