<template>
  <Layout>
    <div class="tags">
      <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`"><span>{{
          tag.name
        }}</span>
        <Icon name="right"/>
      </router-link>

    </div>
    <div class="button-wrapper">
      <new-button class="createTag" @click.native="createTag">新建标签</new-button>
    </div>

  </Layout>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import {tagListModel} from '@/models/tagListModel';
import NewButton from '@/components/newButton.vue';
import TagHelper from '@/mixins/tagHelper';
import {mixins} from 'vue-class-component';


@Component({
      components: {NewButton},

      computed: {
        tags() {
          return this.$store.state.tagsList;
        }
      }
    }
)
export default class Labels extends mixins(TagHelper) {
  created() {
    this.$store.commit('fetchTagList');
  }

  // createTag() {
  //   const name = window.prompt('请输入标签名');
  //   if (name) {
  //     this.$store.commit('createTag', name);
  //   }
  // }
}
</script>

<style lang="scss" scoped>

.tags {
  background: white;
  font-size: 16px;
  padding-left: 16px;

  > .tag {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
  }

  svg {
    color: #666;
    margin-right: 16px;
  }


  //.createTag {
  //  background: #767676;
  //  color: white;
  //  border-radius: 4px;
  //  border: none;
  //  height: 40px;
  //  padding: 0 16px;
  //
  //  &-wrapper {
  //    text-align: center;
  //    margin-top: 44px;
  //  }
  //}
}

.button-wrapper {
  text-align: center;
  margin-top: 44px;
}


</style>