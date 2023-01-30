const initialState = {
    ingredients: [],
    buns: []
}

export const drag = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE_FILL': {
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