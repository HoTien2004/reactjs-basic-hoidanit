import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {
  state = {
    arrJobs: [
      { id: "abcjob1", title: "dev", salary: "500" },
      { id: "abcjob2", title: "tester", salary: "400" },
      { id: "abcjob3", title: "leader", salary: "1000" },
    ],
  };

  render() {
    return (
      <>
        <AddComponent />
        <ChildComponent arrJobs={this.state.arrJobs} />
      </>
    );
  }
}

export default MyComponent;
