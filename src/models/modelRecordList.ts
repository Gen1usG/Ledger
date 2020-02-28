type modelRecordList = {
    getRecordList: () => RecordItem[],
    clone: (record: RecordItem) => RecordItem,
    setRecordList: (recordList: RecordItem[]) => void,
}

const localStorageName = 'recordList';
const modelRecordList: modelRecordList = {
    getRecordList() {
        return JSON.parse(window.localStorage.getItem(localStorageName) || '[]') ;
    },
    clone(record) {
        return JSON.parse(JSON.stringify(record));
    },
    setRecordList(recordList) {
        window.localStorage.setItem(localStorageName, JSON.stringify(recordList));
    }
};

export default modelRecordList;