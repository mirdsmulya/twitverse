import DataApi from '../api/dataApi';
import *  as types from './actionTypes';


export function loadDataSuccess(datas) {
    return {type: types.LOAD_DATA_SUCCESS, datas};
}

export function loadData() {
    return function(dispatch) {
        return DataApi.getAllData().then( datas => {
            dispatch(loadDataSuccess(datas));
        }).catch( error => {
            throw(error);
        });
    };
}