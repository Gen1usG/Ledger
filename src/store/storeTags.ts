import createdID from '@/models/createID';

const localStorageName = 'Tags';
const storeTags: storeTags = {
    tags: [],

    getTags() {
        this.tags = JSON.parse(window.localStorage.getItem(localStorageName) || '[]');
        return this.tags;
    },

    saveTags() {
        window.localStorage.setItem(localStorageName, JSON.stringify(this.tags));
    },

    createTag(name) {
        const dataNames = this.tags.map(item => item.name);
        if (dataNames.indexOf(name) >= 0) {
            return 'duplicated';
        }
        const id = createdID.created().toString();
        this.tags.push({id, name: name});
        this.saveTags();
        return 'success';
    },

    removeTag(tag) {
        if (tag) {
            const index = this.tags.indexOf(tag);
            this.tags.splice(index, 1);
            this.saveTags();
            return 'success';
        } else {
            return 'fail';
        }

    },

    updateTag(newName, id) {
        const idList = this.tags.map(item => item.id);
        if (idList.indexOf(id) >= 0) {
            const nameList = this.tags.map(item => item.name);
            if (nameList.indexOf(newName) >= 0) {
                window.alert('该标签名已存在');
                return 'duplicated';
            } else {
                const tag = this.tags.filter(item => item.id === id)[0];
                tag.name = newName;
                this.saveTags();
                return 'success';
            }
        } else {
            return 'not found';
        }
    }
};
storeTags.getTags();

export default storeTags;