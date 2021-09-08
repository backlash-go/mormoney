<template>
  <Layout class-prefix="layout">

    <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    <Types :value.sync="record.type"/>
    <div class="notes">
      <FormItem field-name="备注" placeholder="请在这里输入备注" @update:value="onUpdateNotes"/>

    </div>
    <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';

import NumberPad from '@/components/money/NumberPad.vue';
import Types from '@/components/money/Types.vue';
import FormItem from '@/components/money/FormItem.vue';
import Tags from '@/components/money/Tags.vue';
import {Component, Watch} from 'vue-property-decorator';
import {recordListModel} from '@/models/recordListModel';
import {tagListModel} from '@/models/tagListModel';


// const recordListModel = require('@/recordListModel.ts').recordListModel;
// const {recordListModel} = require('@/recordListModel.js')

@Component({
  components: {Tags, FormItem, Types, NumberPad}
})

export default class Money extends Vue {

  tags = window.tagList.map((item => item.name));

  //初始化record
  recordList = window.recordList;
  record: RecordItem = {tags: [], type: '-', amount: 0, notes: ''};


  saveRecord() {
    window.createRecord(this.record);
  }

  // @Watch('recordList')
  // onRecordChange() {
  //   recordListModel.save();
  // }

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

.notes {
  padding: 12px 0;
}
</style>


<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


</style>