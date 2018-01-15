import React from 'react'
import {connect} from 'react-redux'
import {onItemSelected} from "./reducers";

const URL = 'https://opendata.larochelle.fr/webservice/?service=getData&key=t0oZndFrlBCPPkj9&db=association&table=assoc_entite&limit=5&format=json'

class Associations extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            associations: []
        }

        this.loadData(0)
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.offset !== this.props.offset) {
            this.loadData(nextProps.offset)
        }
    }

    onFirst = () => {
        this.props.dispatch(setOffset(0))
    }

    onPrior = () => {
        this.props.dispatch(changeOffset(-5))
    }

    onNext = () => {
        this.props.dispatch(changeOffset(5))
    }

    loadData(offset) {
        let url = URL
        if (offset)
            url += "&offset=" + offset;

        fetch(url).then((res) => {
            return res.json()
        }).then((json) => {
            this.setState({
                associations: json.opendata.answer.data
            })
        })
    }

    onItemSelected(row) {
        let action = onItemSelected(row.as_id)
        this.props.dispatch(action)
    }

    render() {
        let trs = this.state.associations.map((a) => {
            return <tr key={a.as_id}
                       onClick={() => {
                           this.onItemSelected(a)
                       }}
                       className={(this.props.selectedRow === a.as_id) ? 'selected' : ''}>
                <td>{a.as_libelle}</td>
                <td>{a.as_adresse}</td>
                <td>{a.as_code_postal}</td>
                <td>{a.as_ville}</td>
            </tr>
        })

        return (<div>
            <button id="prior" onClick={() => {
                this.onFirst()
            }} disabled={this.state.offset == 0}>Prior
            </button>
            <button id="prior" onClick={() => {
                this.onPrior()
            }} disabled={this.state.offset == 0}>Prior
            </button>
            <button id="next" onClick={() => {
                this.onNext()
            }}>Next
            </button>

            <table>
                <thead>
                <tr>
                    <th>Libelle</th>
                    <th>Adresse</th>
                    <th>CP</th>
                    <th>Ville</th>
                </tr>
                </thead>
                <tbody>
                {trs}
                </tbody>
            </table>
        </div>)
    }
}

function mapStateToProps(storeState, props) {
    return {
        offset: storeState.offset,
        selectedRow: storeState.associationId,
    }
}

export default connect(
    mapStateToProps
)(Associations)