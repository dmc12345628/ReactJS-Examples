import React from 'react'

const url = 'https://opendata.larochelle.fr/webservice/?service=getData&key=t0oZndFrlBCPPkj9&db=association&table=assoc_entite&limit=5&format=json'

export default class ButtonState extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            button: 0,
            history: []
        }
    }

    onButtonClick = (id) => {
        this.setState({
            button: id,
            history: this.state.history.concat({
                button: id,
                date: new Date()
            })
        })
        console.log(id)
    }

    render() {
        let trs = this.state.history.map((h, index) => {
            return <tr key={index}>
                <td>{h.button}</td>
                <td>{h.date.toString()}</td>
            </tr>
        })

        return (<div>
            <label>Button clicked : {this.state.button}</label>
            <button id="1" onClick={() => {
                this.onButtonClick(1)
            }}>1
            </button>
            <button id="2" onClick={() => {
                this.onButtonClick(2)
            }}>2
            </button>
            <button id="3" onClick={() => {
                this.onButtonClick(3)
            }}>3
            </button>

            <table>
                <thead>
                <tr>
                    <th>Button</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {trs}
                </tbody>
            </table>
        </div>)
    }
}
