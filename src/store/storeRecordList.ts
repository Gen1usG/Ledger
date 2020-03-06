
const localStorageName = 'recordList';
const storeRecordList: storeRecordList = {
    getRecordList() {
        return JSON.parse(window.localStorage.getItem(localStorageName) || '[]') ;
    },
    cloneRecord(record) {
        return JSON.parse(JSON.stringify(record));
    },
    setRecordList(recordList) {
        window.localStorage.setItem(localStorageName, JSON.stringify(recordList));
    }
};

export default storeRecordList;