import React, { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FiPower } from "react-icons/fi";
import { Link } from "react-router-dom";
import { UsersContext } from "../contexts/UsersContext";

const Header = () => {
  const { userInfo, logout } = useContext(UsersContext);

  const handlelogout = () => {
    logout();
  };

  return (
    <Navbar className="bg-primary navbar-expand text-white">
      <Container>
        <Navbar.Brand>BEST STYLES IN TOWN</Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Link to="/trainees" className="nav-link text-white">
              FASHIONERS
            </Link>
          </Nav.Item>
          {userInfo.name ? (
            <>
              <Nav.Item>
                <Link to="/addtrainee" className="nav-link text-white">
                  ADD
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link onClick={handlelogout} className="nav-link text-white">
                  <FiPower />
                </Link>
              </Nav.Item>
            </>
          ) : (
            <>
              <Nav.Item>
                <Link to="/login" className="nav-link text-white">
                  SIGN IN
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link to="/register" className="nav-link text-white">
                  SIGN UP
                </Link>
              </Nav.Item>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
