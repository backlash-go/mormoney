<template>
  <Layout class-prefix="layout">

    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <Notes @update:value="onUpdateNotes"/>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';

import NumberPad from '@/components/money/NumberPad.vue';
import Types from '@/components/money/Types.vue';
import Notes from '@/components/money/Notes.vue';
import Tags from '@/components/money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import {recordListModel} from '@/models/recordListModel';
import {tagListModel} from '@/models/tagListModel';


// const recordListModel = require('@/recordListModel.ts').recordListModel;
// const {recordListModel} = require('@/recordListModel.js')

tagListModel.fetch();
@Component({
  components: {Tags, Notes, Types, NumberPad}
})

export default class Money extends Vue {

  tags = tagListModel.data.map(item => item.name);

  //初始化record
  recordList = recordListModel.fetch();
  record: RecordItem = {tags: [], type: '-', amount: 0, notes: ''};


  saveRecord() {
    const record2 = recordListModel.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordChange() {
    recordListModel.save(this.recordList);
  }

  onUpdateTags(value: string[]) {
    this.record.tags = value;
  }

  onUpdateNotes(value: string) {
    this.record.notes = value;

  }


  onUpdateAmount(value: string) {
    this.record.amount = parseFloat(value);
  }

}


</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


</style>