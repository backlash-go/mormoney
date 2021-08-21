<template>
  <div>
    <ul class="types">
      <li :class="type === '-' && 'selected'" @click="selectType('-')">支出</li>
      <li :class="type === '+' && 'selected'" @click="selectType('+')">收入</li>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';

@Component
export default class Types extends Vue {
  type = '-';

  @Prop({
    type: Number,
    default: 100
  })
  //Prop 告诉vue xxx  不是data  是prop
  //number | undefined 告诉 ts 编译时的类型
  //Number 告诉vue 运行时是个Number


  selectType(type: string) {
    if (type !== '+' && type !== '-') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }



}

// export default {
//   name: 'Types',
//   props: ['xxx'],
//   data() {
//     return {
//       type: '-'
//     };
//   },
//   mounted() {
//     console.log(this.xxx)
//   },
//   methods: {
//     selectType(type) {
//       if (type !== '+' && type !== '-') {
//         throw new Error('type is unknown');
//       }
//       this.type = type;
//     }
//   }
// };
</script>

<style lang="scss" scoped>
@import "~@/assets/style/helper.scss";


.types {
  background: #c4c4c4;
  display: flex;
  text-align: center;
  font-size: 24px;

  > li {
    width: 50%;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0;
      height: 4px;
      width: 100%;
      background: #333333;
    }
  }
}

</style>