import React from 'react'

const url = 'https://opendata.larochelle.fr/webservice/?service=getData&key=t0oZndFrlBCPPkj9&db=association&table=assoc_entite&limit=5&format=json'

export default class ButtonState extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            associations: []
        }
    }

    onClick = () => {
        fetch(url).then((res) => {
            return res.json()
        }).then((json) => {
            console.log(json)
            this.setState({
                associations: json.opendata.answer.data
            })
        })
    }

    render() {
        let trs = this.state.associations.map((a) => {
            return <tr key={a.as_id}>
                <td>{a.as_libelle}</td>
                <td>{a.as_adresse}</td>
                <td>{a.as_code_postal}</td>
                <td>{a.as_ville}</td>
            </tr>
        })

        return (<div>
            <button id="1" onClick={() => {
                this.onClick()
            }}>See associations
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
             