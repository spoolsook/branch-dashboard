import Actions from "./action"

const initialState = {

}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Actions.ActionType.SHOW_BRANCH_DATA:
        return { ...state, ...payload }

    default:
        return state
    }
}
