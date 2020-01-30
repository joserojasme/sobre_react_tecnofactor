const initialState = {
    listaCaballos:[]
}

function Caballos(state = initialState, action) {
    switch (action.type) {
        case 'SET_LISTA_CABALLOS': {
            return {
                ...state,
                listaCaballos: action.payload.item
            }
        }
        default:
            return state;
    }
}

export default Caballos;
