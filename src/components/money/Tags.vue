<template>
  <div class="tags">
    <div class="new">
      <button @click="createTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="(item ,index) in tagsList" :key="index"
          :class="{selected: selectedTags.indexOf(tagsList[index]) >=0}"
          @click="toggle(tagsList[index])"> {{ item.name }}
        <!--          :class="selectedTags.indexOf(dataSource[index]) >=0 && 'selected'"-->

      </li>

    </ul>
  </div>

</template>

<script lang="ts">

import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
import createId from '@/lib/createId';
import {mixins} from 'vue-class-component';
import TagHelper from '@/mixins/tagHelper';

@Component({
      computed: {
        tagsList() {
          return this.$store.state.tagsList;
        }
      }
    }
)

export default class Tags extends mixins(TagHelper) {
  selectedTags: string[] = [];


  // tagsList: Tag[] = window.tagList;

  created() {
    this.$store.commit('fetchTagList');

  }

  toggle(tag: string) {

    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit('update:value', this.selectedTags);
  }

  // create() {
  //   const name = window.prompt('请输入标签名');
  //   if (!name) {
  //     window.alert('标签名不能为空');
  //   } else {
  //
  //     this.$store.commit('createTag', name);
  //   }
  // }
}


</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";

.tags {
  font-size: 14px;
  padding: 16px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;


  > .current {
    display: flex;
    flex-wrap: wrap;


    > li {
      $bg: #d9d9d9;
      display: flex;
      align-items: center;
      background: $bg;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 20px;
      margin-right: 12px;

      &.selected {
        background: darken($bg, 20%);
        color: white;
      }
    }
  }

  > .new {
    padding-top: 16px;

    > button {
      background: transparent;
      border: none;
      border-bottom: 1px solid;
      color: #999;
      padding: 0 5px;
    }
  }
}

</style>