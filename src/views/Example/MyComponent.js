import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Eric",
    channel: "demo",
  };

  handleOnChange = (event) => {
    this.setState({
      name: event.target.value,
    });
    // console.log(event.target.value); // for debugging purposes
  };

  render() {
    // let name = "Eric";

    return (
      <>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleOnChange(event)}
          />

          <h1 className="abc">Hello, World! {this.state.name}</h1>
        </div>
      </>
    );
  }
}

export default MyComponent;
