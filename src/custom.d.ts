type Tag = {
    id: string,
    name: string
}

type storeTags = {
    tags: Tag[],
    getTags: () => Tag[],
    saveTags: () => void,
    createTag: (name: string) => void,
    removeTag: (tag: Tag) => 'success' | 'fail',
    updateTag: (newValue: string, id: string) => 'success' | 'duplicated' | 'not found'
}

type RecordItem = {
    tags: Tag[],
    type: string,
    note: string,
    numpad: number,
    createTime?: Date | string | number,
}

type storeRecordList = {
    getRecordList: () => RecordItem[],
    cloneRecord: (record: RecordItem) => RecordItem,
    setRecordList: (recordList: RecordItem[]) => void,
}

type ResultItem = {
    title:string,
    item:RecordItem[],
    total?:number
}

