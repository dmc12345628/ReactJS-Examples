import React from 'react'
import LastnameComponent from './lastnameComponent'
import FirstnameComponent from './firstnameComponent'

export default class FirstComponent extends React.Component {
    render() {
        let {card} = this.props
        return <ul>
            <li><FirstnameComponent card={card}/></li>
            <li><LastnameComponent card={card}/></li>
        </ul>
    }
}