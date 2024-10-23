import "./RightSide.css";
import Nav from "react-bootstrap/Nav";
import photo from "../../assets/logo.JPG";
const PeopleProgress = () => {
  return (
    <main className="mb-3 peopleProgress_container bg-white px-2 py-2">
      <div className="border-0 my-md-0 ">
        <div className="d-flex justify-content-between align-items-center px-0 bg-white border-bottom navItems">
          <button className="btn"> People Progress</button>
          <button className="btn btn-sm h-25"> Go to board</button>
        </div>

        <div className="d-flex flex-column justify-content-between align-align-items-end gap-3 bg-white progress_div">
          {/* div 1 */}
          <div className="d-flex align-items-center justify-content-between bg-white ">
            <div>
              <img src={photo} alt="" loading="lazy" />
            </div>
            <div className="progress  ">
              Are either your parents living
              <div className="progress_main">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Example with labe"
                  style={{ width: "85%" }}
                  aria-valuenow="7"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  7
                </div>
              </div>
            </div>
            <button className="add_btn">+</button>
          </div>
          {/* div 2 */}
          <div className="d-flex align-items-center justify-content-between bg-white">
            <div>
              <img src={photo} alt="" loading="lazy" />
            </div>
            <div className="progress ">
              Do you belong to any groups in whi...
              <div className="progress_main">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Example with label"
                  style={{ width: "60%", backgroundColor: "#3596D6" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  6
                </div>
              </div>
            </div>
            <button className="add_btn">+</button>
          </div>
          {/* div 3 */}
          <div className="d-flex align-items-center justify-content-between bg-white">
            <div className="">
              <img src={photo} alt="" loading="lazy" />
            </div>
            <div className="progress ">
              {" "}
              1-2-1 Events
              <div className="progress_main">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-label="Example with label"
                  style={{ width: "40%", backgroundColor: "#F92915" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  27
                </div>
              </div>
            </div>
            <button className="add_btn">+</button>
          </div>
          {/* <Nav.Link className=" text-info show_all_btn_progress ">
            Show All
          </Nav.Link> */}{" "}
          <Nav.Link
            className=" text-info show_all_btn_progress"
            style={{ marginLeft: "80%" }}
          >
            Show All
          </Nav.Link>
        </div>
      </div>
    </main>
  );
};
export default PeopleProgress;
