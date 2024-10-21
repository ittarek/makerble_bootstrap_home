import "./LeftComponent.css";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { MdAdd } from "react-icons/md";
import photo from "../../assets/logo.JPG";
import { CiSettings } from "react-icons/ci";
const Projects = () => {
  return (
    <main>
      <Card className="border-0">
        <Card.Header className="bg-white">
          <Nav
            variant="pills"
            defaultActiveKey="#first"
            className="d-flex justify-content-between align-items-center px-0 bg-white"
          >
            <Nav.Item>
              <Nav.Link href="#disabled" className="bg-white">
                Projects
              </Nav.Link>
            </Nav.Item>
            <button className="btn btn-success btn-sm h-25">
              {" "}
              <MdAdd className="text-black" /> New Projects
            </button>
            {/* <Nav.Item>
              <Nav.Link href="#first" className="btn btn-sm">
                {" "}
              
              </Nav.Link>
            </Nav.Item> */}
          </Nav>
        </Card.Header>
        <Card.Body className="d-flex flex-column gap-2 bg-white">
          <div className="d-flex align-items-center justify-content-between gap-2 bg-white">
            <div className="d-flex bg-white align-items-center gap-2">
              <img src={photo} alt="" />
              <p className="my-auto bg-white">5150 herry</p>
            </div>
            <CiSettings className="bg-white" />
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 bg-white">
            <div className="d-flex bg-white align-items-center gap-2">
              <img src={photo} alt="" />
              <p className="my-auto bg-white">5150 herry</p>
            </div>
            <CiSettings className="bg-white" />
          </div>
          <div className="d-flex align-items-center justify-content-between gap-2 bg-white">
            <div className="d-flex bg-white align-items-center gap-2">
              <img src={photo} alt="" />
              <p className="my-auto bg-white">5150 herry</p>
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
export default Projects;
