import Actions from "./action"
import branchModel from '../models/branchModel';

const initialState = {
    welcomeText: 'สวัสดี',
    branches : branchModel.branches,
    branchDataInChart: [['Month','Amount'],['',0]]
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

    case Actions.ActionType.SHOW_BRANCH_DATA:
        console.log('กำลังจะแสดงข้อมูลสาขา (branchId:'+ payload +')')

        let selectingBranch = branchModel.branches.find(branch => {
            return branch.id === payload;
        })

        if (selectingBranch) {
            let finalChartData = [];

            finalChartData.push(selectingBranch.chartData.chartField);

            let chartDatas = selectingBranch.chartData.datas;

            if (chartDatas != 'undefined' && chartDatas.length > 0) {
                chartDatas.forEach(data => {
                    finalChartData.push([data.month, data.amount]);
                })
            } else {
                finalChartData.push(['', 0]);
            }

            console.log(finalChartData);
            
            // return {
            //     ...state,
            //     branchDataInChart: finalChartData
            // }
        }
        return { ...state }
    default:
        return state
    }
}
