type Tag = {
    id: string,
    name: string
}

type storeTags = {
    tags: Tag[],
    getTags: () => Tag[],
    saveTags: () => void,
    createTag: (name: string) => 'success' | 'duplicated',
    removeTag: (tag: Tag) => 'success' | 'fail',
    updateTag:(newValue:string,id:string)=>'success' | 'duplicated'|'not found'
}

type RecordItem = {
    tags: string[],
    type: string,
    note: string,
    numpad: number,
    createTime?: Date,
}

type storeRecordList = {
    getRecordList: () => RecordItem[],
    cloneRecord: (record: RecordItem) => RecordItem,
    setRecordList: (recordList: RecordItem[]) => void,
}
