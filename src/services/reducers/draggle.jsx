const initialState = {
    ingredients: []
}

export const drag = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_TYPE': {
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        }
        default: {
            return state
        }
    }
}; 