<template>
  <Layout>
    <div class="navBar">
      <Icon class="leftIcon" name="left" @click.native="goBack"/>
      <span class="title">编辑标签</span>
      <span class="rightIcon"></span>
    </div>
    <div class="form-wrapper">
      <FormItem :value="this.tag.name" @update:value="upDateTag" field-name="标签名" placeholder="请输入标签名"/>
    </div>
    <div class="button-wrapper">
      <new-button @click.native="remove">删除标签</new-button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import FormItem from '@/components/money/FormItem.vue';
import NewButton from '@/components/newButton.vue';

@Component({
  components: {NewButton, FormItem}
})
export default class EditLabel extends Vue {

  tag?: { id: string, name: string } = undefined;

  created() {
    const id = this.$route.params.id;
    const tags = window.tagList;
    const tag = window.findTag(id);
    if (tag) {
      this.tag = tag;
    } else {
      this.$router.replace('/404');
    }
    // const tag = tags.filter(t => t.id === id)[0];
    // console.log(tags);
  }

  upDateTag(name: string) {
    if (this.tag) {
      window.updateTag(this.tag.id, name);
    }
  }

  remove() {
    if (this.tag) {
      if (window.removeTag(this.tag.id)) {
        this.$router.back();
      } else {
        window.alert('删除失败');
      }
    }
  }

  goBack() {
    this.$router.back();
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