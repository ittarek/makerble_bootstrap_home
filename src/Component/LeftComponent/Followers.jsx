import "./LeftComponent.css";
import image1 from "../../assets/people/1.jpg";
import image2 from "../../assets/people/2.jpg";
import image3 from "../../assets/people/3.jpg";
import image4 from "../../assets/people/4.jpg";
import image5 from "../../assets/people/5.jpg";
import image6 from "../../assets/people/6.jpg";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";

const Followers = () => {
  return (
    <Card className="border-0 my-3  bg-white ">
      <div className="people_container   bg-white ">
        <Card.Header className="">
          <Nav
            variant="pills"
            defaultActiveKey="#first"
            className="d-flex justify-content-between align-items-center px-0 bg-white"
          >
            <Nav.Item>
              <Nav.Link href="#disabled" className="bg-white">
                People you Follow
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>

        <div className="img_div bg-white mt-3 py-3 px-3">
          <div>
            <img src={image1} alt="" />
          </div>
          <div>
            <img src={image2} alt="" />
          </div>
          <div>
            <img src={image3} alt="" />
          </div>
          <div>
            <img src={image4} alt="" />
          </div>
          <div>
            <img src={image5} alt="" />
          </div>
          <div>
            <img src={image6} alt="" />
          </div>
        </div>
      </div>{" "}
      <Nav.Link
        className="w-50 text-info show_all_btn"
        style={{ marginLeft: "80%" }}
      >
        Show All
      </Nav.Link>
    </Card>
  );
};

export default Followers;
