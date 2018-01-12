import React from 'react'

export default class LastnameComponent extends React.Component {
    render() {
        let {card: {lastname}} = this.props

        return <span>{lastname}</span>
    }
}