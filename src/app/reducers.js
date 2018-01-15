import Immutable from 'seamless-immutable'

const URL = 'https://opendata.larochelle.fr/webservice/?service=getData&key=t0oZndFrlBCPPkj9&db=association&table=assoc_entite&limit=5&format=json'
const ON_ITEM_SELECTED = 'app/ON-ITEM-SELECTED'
const LOAD_DATA = 'app/LOAD_DATA'
const initialState = {
    associations: [],
    offset: 0,
    associationId: 0,
}

export function reducer(previousState = Immutable(initialState), action) {
    switch (action.type) {
        case ON_ITEM_SELECTED:
            let newState = previousState.set('associationKey',
                action.payload.associationId)
            return newState
        case LOAD_DATA:
            let url = URL
            previousState.get('') += offset
            url += "&offset=" + this.state.offset;

            fetch(url).then((res) => {
                return res.json()
            }).then((json) => {
                this.setState({
                    associations: json.opendata.answer.data
                })
            })
            let newState = previousState.set('')
    }

    return previousState
}

export function onItemSelected(associationId) {
    return {
        type: ON_ITEM_SELECTED,
        payload: {
            associationId: associationId
        }
    }
}

export function loadData(offset) {
    return {
        type: LOAD_DATA,
        payload: {
            associations: [],
            offset: offset,
        }
    }
}