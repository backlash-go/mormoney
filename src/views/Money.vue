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


type Record = {
  tags: string[],
  type: string,
  amount: number,
  notes: string
}

@Component({
  components: {Tags, Notes, Types, NumberPad}
})

export default class Money extends Vue {
  tags = ['衣', '食', '住', '行', '娱'];

  //初始化record
  recordList: Record[] = [];
  record: Record = {tags: [], type: '-', amount: 0, notes: ''};


  saveRecord() {
    const record2 = JSON.parse(JSON.stringify(this.record));
    this.recordList.push(record2);
    console.log(this.recordList);
  }

  @Watch('recordList')
  onRecordChange() {
    window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
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