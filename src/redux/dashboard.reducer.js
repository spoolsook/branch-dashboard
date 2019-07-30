import Actions from "./action"
import branchModel from '../models/branchModel';

const initialState = {
    welcomeText: 'สวัสดี',
    branches : branchModel.branches
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Actions.ActionType.SHOW_BRANCH_DATA:
        console.log('กำลังจะแสดงข้อมูลสาขา (branchId:'+ payload +')')
        return { ...state, ...payload }

    default:
        return state
    }
}
