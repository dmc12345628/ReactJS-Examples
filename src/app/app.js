import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

//import Counter from './counter'
//import Buttons from './buttons'
import Associations from './associations'

const root = document.getElementById('app-content')

const card = {
    lastname: "Medina",
    firstname: "Daniel",
    postalCode: 17000,
    country: "France"
}

ReactDOM.render(
    //<FirsComponent card={card}/>,
    //<Counter/>,
    //<Buttons/>,
    <Associations/>,
    root
)