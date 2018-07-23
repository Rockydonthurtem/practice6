import React, { Component } from 'react'


class Name extends Component {
    constructor() {
        super();
        this.state = {
            age: 0
        }
        this.handleAge = this.handleAge.bind(this)
        this.increaseAge = this.increaseAge.bind(this)
        this.decreaseAge = this.decreaseAge.bind(this)
    }

    handleAge(num) {
        this.setState({ age: num })
    }
    increaseAge(age) {
        this.setState({ age: ++age })
    }

    decreaseAge(num) {
        this.setState({ age: 0 })
    }
    render() {
        console.log(this.state.age)
        return (
            <div>
                <input type="text" onChange={(e) => this.handleAge(e.target.value)} />
                <button onClick={() => this.increaseAge(this.state.age)}>Up Age</button>
                <button onClick={() => this.decreaseAge(this.state.age)}>Reset Age</button>
                <div>
                    {this.state.age}
                    <h4>
                        {this.props.hat}
                    </h4>
                </div>
            </div>
        )
    }
}

export default Name