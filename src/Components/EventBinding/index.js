import React, { Component } from 'react'
import { Button } from 'react-bootstrap';

class EventBinding extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
        count : 0
      }
    }

    // ES6
    // handleClick = () => {
    //     this.setState({
    //         count : this.state.count + 1
    //     })
    // }

    // use Binding for normal function
    handleClick(){
        this.setState({
            count : this.state.count + 1
        })
    }

    render() {
        return (
        <div>
            <h3 className='m-5'>{this.state.count}</h3>
            <Button onClick={this.handleClick.bind(this)} className="m-3">
                Increase +
            </Button>
        </div>
        );
    }
}

export default EventBinding;
