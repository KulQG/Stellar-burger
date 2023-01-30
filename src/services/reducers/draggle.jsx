const initialState = {
    ingredients: []
}

export const drag = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_ARR': {
            return {
                ...state,
                ingredients: action.arr
            }
        }
        case 'UPDATE_TYPE': {
            return {
                ...state,
                ingredients: state.ingredients.map(i =>
                    i.id === action.id ? {...i, type: action.type} : i
                )
            }
        }
        default:{
            return state
        }
    }
}; 