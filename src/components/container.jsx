import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import Page from "./page";
import './styles/index1.css'
class Container extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="Container">
          <div className="Box1">
            <Sidebar />
          </div>
          <div className="Box2">
            <Navbar />
            <Page />
          </div>
        </div>
      </>
    );
  }
}
export default Container;
