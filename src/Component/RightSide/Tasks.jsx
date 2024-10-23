import "./RightSide.css";
import Nav from "react-bootstrap/Nav";
import { CiSettings } from "react-icons/ci";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowRoundBack } from "react-icons/io";
const Tasks = () => {
  return (
    <main className="task_container rounded-2 ">
      <div className=" my-md-0 my-5 bg-white pb-3 rounded-2">
        <div className="d-flex justify-content-between align-items-center px-2 bg-white   bg-white nav_items">
          <Nav.Link href="#disabled" className="bg-white">
            Tasks
          </Nav.Link>
          <Nav.Link>
            <div className="task_count">
              {" "}
              <div>25 To Do</div> |<div>43 Done</div>
            </div>
          </Nav.Link>

          <button className="btn  btn-sm filter_btn"> Filters</button>
        </div>
        <div className="d-flex justify-content-center align-content-center bg-white my-2 save_task_div pb-3">
          <input type="text" placeholder="Add your next task" />
          <button>Save Task</button>
        </div>
        <div className=" gap-2 bg-white task_list_div">
          {/* sub div 1 */}
          <div className="task_list_sub_div ">
            <div>
              <p>follow up call needed</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" />{" "}
              <button>
                <CiSettings />
              </button>
            </div>
          </div>
          {/* sub div 2*/}
          <div className="task_list_sub_div ">
            <div>
              <p>follow up call needed</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" />{" "}
              <button>
                <CiSettings />
              </button>
            </div>
          </div>
          {/* sub div 3 */}
          <div className="task_list_sub_div ">
            <div>
              <p>follow up call needed</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" />{" "}
              <button>
                <CiSettings />
              </button>
            </div>
          </div>
          {/* sub div 4 */}
          <div className="task_list_sub_div ">
            <div>
              <p>follow up call needed</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" />{" "}
              <button>
                <CiSettings />
              </button>
            </div>
          </div>
          {/* sub div 5 */}
          <div className="task_list_sub_div ">
            <div>
              <p>follow up call needed</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" />{" "}
              <button>
                <CiSettings />
              </button>
            </div>
          </div>
          {/* sub div 6*/}
          <div className="task_list_sub_div ">
            <div>
              <p>follow up call needed</p>
            </div>
            <div>
              <input type="checkbox" name="" id="" />{" "}
              <button>
                <CiSettings />
              </button>
            </div>
          </div>
        </div>{" "}
        <div className="  task_pagination_btn ">
          <div><IoIosArrowRoundBack/>Previous</div>
          <div>Next <IoIosArrowRoundForward /></div>
        </div>
      </div>
    </main>
  );
};
export default Tasks;
