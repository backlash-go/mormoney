import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import Tags from '@/components/money/Tags.vue';
import createId from '@/lib/createId';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagsList: [] as Tag[],
  },
  mutations: {
    createRecord(state, record: RecordItem) {
      const record2 = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2);
      store.commit('save');
    },
    save(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));

    },
    fetch(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];

    },
    fetchTagList(state) {
      return state.tagsList = JSON.parse(window.localStorage.getItem('tagList') || '[]');

    },
    createTag(state, name: string) {
      const names = state.tagsList.map((item) => item.name);
      if (names.indexOf(name) >= 0) {
        alert('已经存在');
        return '';
      }
      const id = createId().toString();
      state.tagsList.push({id: id, name: name});
      store.commit('saveTag');
      return name;
    },
    saveTag(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagsList));

    },
    findTag(state, id: string) {
      return state.tagsList.filter((t => t.id === id))[0];
    }


  },
  actions: {},
  modules: {}
});


export default store;