import React from 'react'

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    onCountClick() {
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }

    render() {
        return (<div>
            <label>Counter : {this.state.count}</label>
            <button onClick={() => {
                this.onCountClick()
            }}>Increment
            </button>
        </div>)
    }
}