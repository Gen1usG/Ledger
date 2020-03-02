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
    removeTag: (tag: Tag) => void,
    update:(newValue:string,id:string)=>void
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
    },

    removeTag(tag) {
        const index = this.data.indexOf(tag);
        this.data.splice(index, 1);
        this.saveTags()
    },

    update(newName,id){
        this.getTags();
        const tag = this.data.filter(item=>item.id===id)[0];
        tag.name = newName;
        this.saveTags()
    }

};


export default modelTags;