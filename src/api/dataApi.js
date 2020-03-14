
import Data from '../../dataUser';

class DataApi {
    static getAllData() {
        return new Promise((resolve, rejects) => {
            setTimeout( () => {
                resolve(Object.assign([], Data.datas));
            },0);
        });
    }
}

export default DataApi;