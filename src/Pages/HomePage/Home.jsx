import "./Home.css"
import { Button, Card, Form } from "react-bootstrap";
import image from "../../assets/logo.JPG";
import { BsHeart, BsJournalBookmark } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
const Home = () => {
  const [data, setData] = useState([
    {
      id: 1,
      title: "Yael Adamson-Brown",
      activity: "Activity happened on 4th Dec 2023",
      first_post: "First posted at 16:13 on 11th December",
      last_edit: "Last edited 16:13 on Dec 2023",
      story_list: " stories=spareadsheet=import=at=10=43=on=11th=december=2023",
      details:
        "New update by Yael Adamson-Brown working on the Using football to reach life skills to children for An Organization Demo with Sofia",
      image: "../../assets/logo.JPG",
      comment: "5",
      favourites: "10",
    },
    {
      id: 2,
      title: "Yael Adamson-Brown",
      activity: "Activity happened on 4th Dec 2023",
      first_post: "First posted at 16:13 on 11th December",
      last_edit: "Last edited 16:13 on Dec 2023",
      story_list: " stories=spareadsheet=import=at=10=43=on=11th=december=2023",
      details:
        "New update by Yael Adamson-Brown working on the Using football to reach life skills to children for An Organization Demo with Sofia",
      image: "../../assets/logo.JPG",
      comment: "5",
      favourites: "10",
    },
  ]);

  const handleAddData = () => {

    const newData = {
      id: 3, 
      title: "New Title",
      activity: "Activity happened on 5th Dec 2023",
      first_post: "First posted at 16:13 on 12th December",
      last_edit: "Last edited 16:13 on Dec 2023",
      story_list: "stories=spareadsheet=import=at=11=43=on=12th=december=2023",
      details:
        "New update by New Person working on the Using football to reach life skills to children for An Organization Demo with Another Person",
      image: "../../assets/new_logo.JPG",
      comment: "8",
      favourites: "15",
    };

    // Update the state with the new data
    setData(prevData => [...prevData, newData]);
    alert("add post success")
    // toast.success("Successfully toasted!");
  };
  return (
    <section className="w-100">
      {" "}

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

          <Button onClick={handleAddData} variant="danger" type="submit">
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
        {data.map(news => (
          <Card
            key={news.id}
            className="bg-white rounded border-0 px-1 mb-3 px-2"
          >
            <Card.Img
              variant="start"
              className=""
              src={image}
              style={{ width: "100px" }}
            />
            <Card.Body
              className="bg-white position-relative"
              style={{ top: "-90px", right: "20px", marginLeft: "110px" }}
            >
              <div className="d-flex justify-content-between align-items-center bg-white news_details">
                <div className="bg-white" style={{ fontSize: "10px" }}>
                  <small className="bg-white text-info fs-6 ">
                    Yael Adamson-Brown
                  </small>{" "}
                  <br />
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
                <div className="bg-white news_edit">
                  <p className="bg-white">Edited by 1</p>
                </div>
                <div
                  className="bg-white position-relative new_setting"
                  style={{ marginTop: "-70px", marginLeft: "-10px" }}
                >
                  <CiSettings className="bg-white" />
                </div>
              </div>
            </Card.Body>
            <div
              className="bg-white "
              style={{ marginTop: "-100px", marginBottom: "70px" }}
            >
              <small className="bg-white text-success">
                New update by Yael Adamson-Brown working on the Using football
                to reach life skills to children for An Organization Demo with
                Sofia
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
              <img src={image} alt="" loading="lazy" />
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
        ))}
        {/* <Toaster /> */}
      </section>
    </section>
  );
};

export default Home;
