import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/119kanika");
    const json = data.json();

    console.log(json);
  }

  render() {
    return (
      <div className="user-card">
        <h2>Name: {this.props.name}</h2>
        <h3>Location: </h3>
        <h3>Contact: </h3>
        <h3>count: {this.state.count}</h3>
      </div>
    );
  }
}

export default UserClass;
