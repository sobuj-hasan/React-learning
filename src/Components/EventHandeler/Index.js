import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class EventHandeler extends Component {
  // handleClick = () =>{
  //   console.log('Clicked')
  // }

  constructor(props) {
    super(props);

    this.state = {
      changeValue: "",
    };
  }

  handleChange = (e) => {
    
    this.setState({
      changeValue: e.target.value,
    });
    console.log(e.target.value)
  };

  render() {
    return (
      <div>
        {/* <Button onClick={this.handleClick}>Click Here</Button> */}
        <input className="m-4" type="text" onChange={this.handleChange} />
        <p className="card p-4">{this.state.changeValue}</p>
      </div>
    );
  }
}

export default EventHandeler;