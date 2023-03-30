interface IDropTarget {
    types: [string, string]
}

const initialState: IDropTarget = {
    types: ['buns', 'main']
}
export const dropTargetReducer = (state = initialState) => {
    return state;
}; 