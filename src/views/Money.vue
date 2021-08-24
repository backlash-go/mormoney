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
import {model} from '@/model';


// const model = require('@/model.ts').model;
// const {model} = require('@/model.js')


@Component({
  components: {Tags, Notes, Types, NumberPad}
})

export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '娱'];

  //初始化record
  recordList = model.fetch();
  record: RecordItem = {tags: [], type: '-', amount: 0, notes: ''};


  saveRecord() {
    const record2 = model.clone(this.record);
    record2.createdAt = new Date();
    this.recordList.push(record2);
  }

  @Watch('recordList')
  onRecordChange() {
    model.save(this.recordList);
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