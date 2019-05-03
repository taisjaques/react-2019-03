const initialState = {
    count: 0
}

const Types = {
    ADD: 'ADD',
    SUBTRACT: 'SUBTRACT'
}

const add = () => ({
    type: Types.ADD
})

const subtract = () => ({
    type: Types.SUBTRACT
})

export const Creators = {
    add,
    subtract
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case Types.ADD:
            return {
                ...state,
                count: state.count + 1
            }
        case Types.SUBTRACT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            return state
    }
}