import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import image from "../../assets/logo.JPG";
import { BsHeart, BsJournalBookmark } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
const Home = () => {
  return (
    <Container fluid className="">
      <section className="">
        <Form
          inline
          className="py-1 px-2 d-flex align-items-center bg-white gap-2 mx-auto rounded"
        >
          <Form.Control
            type="text"
            placeholder="Yael Adamson Brown Share some progress"
            className="my-1 border border-secondary mr-sm-2 "
          />

          <Button variant="danger" type="submit">
            Post
          </Button>
        </Form>
      </section>

      <section className="mt-5">
        <h4
          className="text-black bg-white position-relative py-3 px-3 rounded-top"
          style={{ marginBottom: "-1px" }}
        >
          NEWSFEED
        </h4>
        <Card className="bg-white rounded border-0 px-1 mb-3">
          <Card.Img
            variant="start"
            className=""
            src={image}
            style={{ width: "100px" }}
          />
          <Card.Body
            className="bg-white position-relative"
            style={{ top: "-100px", right: "20px", marginLeft: "100px" }}
          >
            <div className="d-flex justify-content-between align-items-center bg-white">
              <div className="bg-white" style={{fontSize:"10px"}}>
                <small className="bg-white text-info fs-5">
                  Yael Adamson-Brown
                </small> <br />
                <small className="bg-white">
                  Activity happened on 4th Dec 2023
                </small>{" "}
                <br />
                <small className="bg-white">
                  First posted at 16:13 on 11th December
                </small>{" "}
                <br />
                <small className="bg-white">
                  Last edited 16:13 on Dec 2023
                </small>{" "}
                <br />
                <small className="bg-success text-white rounded-5 px-2 py-1">
                  <BsJournalBookmark className="text-info" />{" "}
                  stories=spareadsheet=import=at=10=43=on=11th=december=2023
                </small>
              </div>
              <div className="bg-white">
                <p className="bg-white">Edited by 1</p>
              </div>
              <div
                className="bg-white position-relative "
                style={{ marginTop: "-70px", marginLeft: "-10px" }}
              >
                <CiSettings className="bg-white" />
              </div>
            </div>
          </Card.Body>
          <div
            className="bg-white"
            style={{ marginTop: "-100px", marginBottom: "70px" }}
          >
            <small className="bg-white text-success">
              New update by Yael Adamson-Brown working on the Using football to
              reach life skills to children for An Organization Demo with Sofia
            </small>
          </div>
          <div className="d-flex justify-content-between bg-white mx-4">
            <BsHeart className="bg-white text-danger fs-5" />
            <div className="bg-white">
              <Button
                className="position-relative "
                style={{ marginTop: "-70px" }}
                variant="success"
              >
                Expand Story
              </Button>
            </div>
            <small className="bg-white">
              <span className="bg-white">0 Comments</span>
              <span className="ms-3 bg-white">0 Favourites</span>
            </small>
          </div>
          <Card.Footer className="bg-white d-flex justify-content-between align-items-center ">
            <img src={image} alt="" />
            <Form
              inline
              className="py-1 px-2 d-flex w-100 align-items-center bg-white gap-5 ms-5"
            >
              <Form.Control
                type="text"
                placeholder="add your comment"
                className="my-1 border border-secondary mr-sm-2 rounded-pill "
              />

              <Button className="rounded-0" variant="danger" type="submit">
                Post
              </Button>
            </Form>
          </Card.Footer>
        </Card>
        <Card className="bg-white rounded border-0 px-1">
          <Card.Img
            variant="start"
            className=""
            src={image}
            style={{ width: "100px" }}
          />
          <Card.Body
            className="bg-white position-relative"
            style={{ top: "-100px", right: "20px", marginLeft: "100px" }}
          >
            <div className="d-flex justify-content-between align-items-center bg-white">
              <div className="bg-white" style={{fontSize:"10px"}}>
                <small className="bg-white text-info fs-5">
                  Yael Adamson-Brown
                </small> <br />
                <small className="bg-white">
                  Activity happened on 4th Dec 2023
                </small>{" "}
                <br />
                <small className="bg-white">
                  First posted at 16:13 on 11th December
                </small>{" "}
                <br />
                <small className="bg-white">
                  Last edited 16:13 on Dec 2023
                </small>{" "}
                <br />
                <small className="bg-success text-white rounded-5 px-2 py-1">
                  <BsJournalBookmark className="text-info" />{" "}
                  stories=spareadsheet=import=at=10=43=on=11th=december=2023
                </small>
              </div>
              <div className="bg-white">
                <p className="bg-white">Edited by 1</p>
              </div>
              <div
                className="bg-white position-relative "
                style={{ marginTop: "-70px", marginLeft: "-10px" }}
              >
                <CiSettings className="bg-white" />
              </div>
            </div>
          </Card.Body>
          <div
            className="bg-white"
            style={{ marginTop: "-100px", marginBottom: "70px" }}
          >
            <small className="bg-white text-success">
              New update by Yael Adamson-Brown working on the Using football to
              reach life skills to children for An Organization Demo with Sofia
            </small>
          </div>
          <div className="d-flex justify-content-between bg-white mx-4">
            <BsHeart className="bg-white text-danger fs-5" />
            <div className="bg-white">
              <Button
                className="position-relative "
                style={{ marginTop: "-70px" }}
                variant="success"
              >
                Expand Story
              </Button>
            </div>
            <small className="bg-white">
              <span className="bg-white">0 Comments</span>
              <span className="ms-3 bg-white">0 Favourites</span>
            </small>
          </div>
          <Card.Footer className="bg-white d-flex justify-content-between align-items-center ">
            <img src={image} alt="" />
            <Form
              inline
              className="py-1 px-2 d-flex w-100 align-items-center bg-white gap-5 ms-5"
            >
              <Form.Control
                type="text"
                placeholder="add your comment"
                className="my-1 border border-secondary mr-sm-2 rounded-pill "
              />

              <Button className="rounded-0" variant="danger" type="submit">
                Post
              </Button>
            </Form>
          </Card.Footer>
        </Card>
      </section>
    </Container>
  );
};

export default Home;
