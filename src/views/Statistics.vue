<template>
  <Layout>
    <Types class-prefix="zzz" :value.sync="yyy"/>
  </Layout>
</template>

<script lang="ts">
import Types from '@/components/money/Types.vue';
import Component from 'vue-class-component';
import Vue from 'vue';
import dayjs from 'dayjs';

@Component({
  components: {Types}
})

export default class Statistics extends Vue {
  yyy = '-';

  created() {
    const now = new dayjs();

    console.log(now);
  }

}


</script>

<style lang="scss" scoped>

::v-deep .zzz-item {
  background: white;

  &.selected {
    background: #c4c4c4;

    &::after {
      display: none;
    }

  }
}

</style>