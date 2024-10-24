import Container from "react-bootstrap/Container";
import "./Header.css"
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css"; 
import {  BsLightningFill, BsListUl,  } from "react-icons/bs";
import {  BiStar } from "react-icons/bi";
import { FaRegEnvelope } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { MdAdd } from "react-icons/md";
import siteLogo2 from "../../assets/logo.JPG"; 

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-white ">
      <Container fluid className="bg-white">
        <Navbar.Brand href="/" className="bg-white">
          <img src={siteLogo2} alt="Site Logo 2" loading="lazy" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Navbar.Collapse className="bg-white" id="responsive-navbar-nav">
          {/* Navigation links aligned to the left */}
          <Nav className="me-auto bg-white nav_tab">
            <Nav.Link href="#features">My Apps</Nav.Link>
            <Nav.Link href="#pricing">Home</Nav.Link>
            <Nav.Link href="#pricing">Explore</Nav.Link>
            {/* Dropdown menu with additional links */}
            <Form inline className="bg-white ms-lg-3">
              <Row>
                <Col className="bg-white" xs="auto">
                  <Form.Control
                    type="text"
                    placeholder="Search For Connect One"
                    className=" mr-sm-2"
                  />
                </Col>
              </Row>
            </Form>
          </Nav>
          {/* Navigation links aligned to the right */}
          <Nav className="bg-white">
            <span className="my-auto bg-white">
              <IoMdNotifications className="fs-4 bg-white" />
            </span>
            <span className="bg-secondary h-25 rounded mx-2 text-white px-1 my-auto">
              12
            </span>
            <span className="bg-white mx-2 my-auto">
              <FaRegEnvelope className="fs-4 bg-white" />
            </span>
            <span className="my-auto bg-white">
              {" "}
              <BsLightningFill className="my-auto fs-4 bg-white" />
            </span>
            <p className="bg-secondary h-25 rounded my-auto mx-2 text-white px-1">
              14
            </p>

            <Nav.Link eventKey={2} href="#memes">
              <img src={siteLogo2} alt="" loading="lazy" />
              <span className="bg-white">Yael Adamson-Brown</span>
            </Nav.Link>
            <Button variant="danger">
              {" "}
              <MdAdd className="text-black" /> Create
            </Button>
            <Button className="update_btn  " variant="outline-primary">
              <BiStar className="bg-white" /> Upgrade
            </Button>
            <Button variant="outline-primary">
              <BsListUl className="bg-white me-1" />
              More
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
