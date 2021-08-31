<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <new-button>删除标签</new-button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {tagListModel} from '@/models/tagListModel';
import FormItem from '@/components/money/FormItem.vue';
import NewButton from '@/components/newButton.vue';

@Component({
  components: {NewButton, FormItem}
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    const tags = tagListModel.fetch();
    const tag = tags.filter((t => t.id === id))[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace('/404');
    }
    // const tag = tags.filter(t => t.id === id)[0];
    // console.log(tags);
  }
}
</script>

<style lang="scss" scoped>

.navBar {
  text-align: center;
  padding: 12px 16px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > .title {

  }

  > .leftIcon {
    width: 24px;
    height: 24px;
  }

  > .rightIcon {
    width: 24px;
    height: 24px;
  }

}

.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44-16px;
}


.form-wrapper {
  background: white;
  margin-top: 8px;
}


</style>