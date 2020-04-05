import * as types from '../actions/actionTypes';
import initialState from '../reducers/initialState';



export default function dataReducer(state = initialState.datas, action) {
    debugger;
    switch(action.type) {
        case types.LOAD_DATA_SUCCESS:
            return action.datas;
        case types.ADD_POST_SUCCESS:
            return [
                Object.assign({}, action.data),
                ...state.filter(data => data.username !== action.data.username) 
              ];
        case types.DELETE_POST_SUCCESS:
            return action.datas;

        case types.ADD_COMMENT_SUCCESS:
            return [
                Object.assign({}, action.data),
                ...state.filter(data => data.username !== action.data.username)
            ];

        case types.DELETE_COMMENT_SUCCESS:
            return action.datas;
        default:
            return state;
    }
}