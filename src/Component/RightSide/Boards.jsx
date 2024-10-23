import "./RightSide.css"
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { MdAdd } from "react-icons/md";
import { BsFunnel, BsQuestionCircleFill } from "react-icons/bs";
import photo from "../../assets/logo.JPG";
const Boards = () => {
  return (
    <main>
      <Card className="border-0 my-md-0 my-5">
        <Card.Header className="bg-white">
          <Nav
            variant="pills"
            defaultActiveKey="#first"
            className="d-flex justify-content-between align-items-center px-0 bg-white"
          >
            <Nav.Item>
              <Nav.Link href="#disabled" className="bg-white">
                15 Boardss <BsFunnel className="bg-white" />{" "}
                <BsQuestionCircleFill className="text-black " />
              </Nav.Link>
            </Nav.Item>
            <button className="btn btn-success btn-sm h-25">
              {" "}
              <MdAdd className="text-black" /> New Boards
            </button>
    
          </Nav>
        </Card.Header>
        <Card.Body className="d-flex flex-column gap-2 bg-white">
          <div className="d-flex align-items-center gap-2 bg-white">
            <img src={photo} alt="" />
            <p className="my-auto bg-white">herry</p>
          </div>
          <div className="d-flex align-items-center gap-2 bg-white">
            <img src={photo} alt="" />
            <p className="my-auto bg-white">Tariqul</p>
          </div>
          <div className="d-flex align-items-center gap-2 bg-white">
            <img src={photo} alt="" />
            <p className="my-auto bg-white">Haresh</p>
          </div>
          <Nav.Link
            className=" text-info show_all_btn_board "
        
          >
            Show All
          </Nav.Link>
        </Card.Body>
      </Card>
    </main>
  );
};
export default Boards;
