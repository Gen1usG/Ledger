import Vue from 'vue'
import {Component} from 'vue-property-decorator';

@Component
export default class createTag extends Vue{
    createTag() {
        const newName = window.prompt('请输入标签名') as string;
        if (!newName) {
            return alert('标签名不能为空');
        }
        this.$store.commit('createTag', newName);
    }
}