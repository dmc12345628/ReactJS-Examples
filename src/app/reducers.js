import Immutable from 'seamless-immutable'

const ON_ITEM_SELECTED = 'app/ON-ITEM-SELECTED'
const SET_OFFSET = 'app/SET_OFFSET'
const CHANGE_OFFSET = 'app/CHANGE_OFFSET'
const initialState = {
    offset: null,
    associationId: 0,
}

export function reducer(previousState = Immutable(initialState), action) {
    switch (action.type) {
        case ON_ITEM_SELECTED: {
            let newState = previousState.set('associationId',
                action.payload.associationId)
            return newState
        }
        case SET_OFFSET: {
            let newState = previousState.set('offset',
                action.payload.offset)
            return newState
        }
        case CHANGE_OFFSET: {
            let newState = previousState.set('offset',
                previousState.offset + action.payload.delta)
            return newState
        }
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

export function setOffset(offset) {
    return {
        type: SET_OFFSET,
        payload: {
            offset: offset
        }
    }
}

export function changeOffset(delta) {
    return {
        type: CHANGE_OFFSET,
        payload: {
            delta: delta
        }
    }
}