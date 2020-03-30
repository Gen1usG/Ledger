import Vue from 'vue';
import Vuex from 'vuex';
import createdID from '@/models/createID';
import store from '@/store';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tags: [] as Tag[],
        recordList:[] as RecordItem[]
    },
    mutations: {
        //about Tags
        getTags(state) {
            state.tags = JSON.parse(window.localStorage.getItem('Tags') || "[{id:1,name:'住宿'},{id:2,name:'购物'},{id:3,name:'出行'},{id:4,name:'饮食'}]");
        },

        saveTags(state) {
            window.localStorage.setItem('Tags', JSON.stringify(state.tags));
        },

        createTag(state, name: string) {
            const dataNames = state.tags.map(item => item.name);
            if (dataNames.indexOf(name) >= 0) {
                return window.alert('标签名已存在');
            }
            const id = createdID.created().toString();
            state.tags.push({id, name: name});
            store.commit('saveTags');
            window.alert('成功添加标签')
        },

        removeTag(state, tag) {
            if (tag) {
                const index = state.tags.indexOf(tag);
                state.tags.splice(index, 1);
                store.commit('saveTags');
            }
        },

        updateTag(state,payload:{name:string, id:string}) {
            const idList = state.tags.map(item => item.id);
            console.log(idList);
            if (idList.indexOf(payload.id) >= 0) {
                const nameList = state.tags.map(item => item.name);
                if (nameList.indexOf(payload.name) >= 0) {
                    window.alert('该标签名已存在');
                } else {
                    const tag = state.tags.filter(item => item.id === payload.id)[0];
                    tag.name = payload.name;
                    store.commit('saveTags');
                }
            }
        },

        // about Record
        getRecordList(state) {
             state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') ;
             return state.recordList
        },

        saveRecordList(state,recordList:RecordItem[]) {
            window.localStorage.setItem('recordList', JSON.stringify(recordList));
            alert('保存成功')
        }
    },
});
