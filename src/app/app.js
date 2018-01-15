import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

//import Counter from './counter'
//import Buttons from './buttons'
import Associations from './associations'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {reducer} from './reducers'

const root = document.getElementById('app-content')

let store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

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
    <Provider store={store}>
        <Associations/>
    </Provider>,
    root
)