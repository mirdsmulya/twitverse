
let datas = []

class DataApi {
    static getAllData() {
        return new Promise((resolve, rejects) => {
            setTimeout( () => {
                resolve(Object.assign([], datas));
            },0);
        });
    }
}

export default DataApi;