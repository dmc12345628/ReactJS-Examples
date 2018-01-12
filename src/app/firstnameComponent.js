import React from 'react'

export default class FirstnameComponent extends React.Component {
    render() {
        return <span>{this.props.card.firstname}</span>
    }
}