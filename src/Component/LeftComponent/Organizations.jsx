import "./LeftComponent.css";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { CiSettings } from "react-icons/ci";
import image1 from "../../assets/organization/1.jpg";
import image2 from "../../assets/organization/2.jpg";
import image3 from "../../assets/organization/3.jpg";
const Organizations = () => {
  return (
    <main className="organization">
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
              <img className=" " src={image1} alt="" />
              <p className="my-auto bg-white">2021 portfolio</p>
            </div>
            <CiSettings className="bg-white" />
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 bg-white">
            <div className="d-flex bg-white align-items-center gap-2">
              <img src={image2} alt="" />
              <p className="my-auto bg-white">All Partners</p>
            </div>
            <CiSettings className="bg-white" />
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 bg-white">
            <div className="d-flex bg-white align-items-center gap-2">
              <img src={image3} alt="" />
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
