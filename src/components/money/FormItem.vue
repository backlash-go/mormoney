<template>
  <div>
    <label class="formItem">
      <span class="name">{{ this.fieldName }}</span>
      <input type="text" v-model="value" :placeholder="this.placeholder">
    </label>
  </div>

  <!--
  代码有 :value =value @input="value = $event.target.value" == v-recordListModel
  -->

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop, Watch} from 'vue-property-decorator';

@Component
export default class FormItem extends Vue {
  value = '';

  @Prop({required: true}) fieldName!: string;
  @Prop() placeholder!: string;

  @Watch('value')
  onValueChanges(value: string) {
    this.$emit('update:value', value);
  }


}

</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


.formItem {
  font-size: 14px;
  padding-left: 16px;
  display: flex;
  align-items: center;


  .name {
    padding-right: 16px;
  }

  input {
    height: 40px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;


  }
}

</style>