import React from "react";

class MyLabel extends React.Component {
  render() {
    return (
      <p>
        <b>Has dado {this.props.number} clicks</b>
      </p>
    );
  }
}

export default MyLabel;
