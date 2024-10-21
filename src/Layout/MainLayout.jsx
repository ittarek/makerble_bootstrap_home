import { Container } from 'react-bootstrap';
import Header from '../SharedComponent/Hearder/Header';
import Home from './../Pages/HomePage/Home';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const MainLayout = () => {
    return (
      <main className="">
        <Header />
        <section
          className="mx-auto row  mt-4">
          <div className="col-md-3 col-sm-12">
            <LeftSide />
          </div>
          <div className="col-md-6 col-sm-12">
            <Home />
          </div>{" "}
          <div className="col-md-3 col-sm-12">
            <RightSide />
          </div>
        </section>
      </main>
    );
};

export default MainLayout;