import createdID from '@/models/createID';

type Tag = {
    id: string,
    name: string
}

type modelTags = {
    data: Tag[],
    getTags: () => Tag[],
    saveTags: () => void,
    createTag: (name: string) => 'success' | 'duplicated',
}

const localStorageName = 'Tags';

const modelTags: modelTags = {
    data: [],

    getTags() {
        this.data = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
        return this.data;
    },

    saveTags() {
        window.localStorage.setItem(localStorageName, JSON.stringify(this.data));
    },

    createTag(name) {
        const dataNames = this.data.map(item => item.name);
        if (dataNames.indexOf(name) >= 0) {
            return 'duplicated';
        }
        const id = createdID.created().toString();
        this.data.push({id, name: name});
        this.saveTags();
        return 'success';
    }
    // const newTag = {
    //     id: createdID.created(),
    //     name: window.prompt('请输入标签名') as string
    // };
    // console.log(this.data);
    // const dataNames = this.data.map(item => item.name);
    // if (dataNames.indexOf(newTag.name) >= 0) {
    //     window.alert('已存在标签');
    // } else {
    //     this.data.push(newTag);
    //     this.saveTags();
    // }
};


export default modelTags;