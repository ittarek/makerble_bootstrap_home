import "./LeftComponent.css";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { CiSettings } from "react-icons/ci";
import photo from "../../assets/logo.JPG";
const Organizations = () => {
  return (
    <main>
      <Card className="border-0">
        <Card.Header className="bg-white">
          <Nav
            variant="pills"
            defaultActiveKey="#first"
            className=" px-0 bg-white"
          >
            <Nav.Item>
              <Nav.Link href="#disabled" className="bg-white">
                Organizations
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body className="d-flex flex-column gap-2 bg-white">
          <div
            className="d-flex 
          
          

          align-items-center justify-content-between gap-2 bg-white"
          >
            <div className="d-flex bg-white align-items-center gap-2">
              <img src={photo} alt="" />
              <p className="my-auto bg-white">2021 portfolio</p>
            </div>
            <CiSettings className="bg-white" />
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 bg-white">
            <div className="d-flex bg-white align-items-center gap-2">
              <img src={photo} alt="" />
              <p className="my-auto bg-white">All Partners</p>
            </div>
            <CiSettings className="bg-white" />
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 bg-white">
            <div className="d-flex bg-white align-items-center gap-2">
              <img src={photo} alt="" />
              <p className="my-auto bg-white">Big Lottery Found</p>
            </div>
            <CiSettings className="bg-white" />
          </div>
          <Nav.Link
            className="w-50 text-info show_all_btn"
            style={{ marginLeft: "80%" }}
          >
            Show All
          </Nav.Link>
        </Card.Body>
      </Card>
    </main>
  );
};
export default Organizations;
