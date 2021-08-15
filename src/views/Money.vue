<template>
  <Layout>
    <div class="tags">
      <ul class="current">
        <li>衣</li>
        <li>食</li>
        <li>住</li>
        <li>行</li>
      </ul>
      <div class="new">
        <button>新增标签</button>
      </div>
    </div>

    <div>
      <label class="notes">
        <span class="name">备注</span>
        <input type="text">
      </label>
    </div>

    <div>
      <ul class="types">
        <li class="selected">支出</li>
        <li>收入</li>
      </ul>
    </div>

    <div class="numberPad">
      <div class="output">1000</div>
      <div class="buttons">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>+</button>
        <button>删除</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>-</button>
        <button>清空</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>x</button>
        <button>OK</button>
        <button>0</button>
        <button>.</button>
      </div>

    </div>
  </Layout>
</template>

<script lang="ts">
export default {
  name: 'Money',
};
</script>

<style lang="scss" scoped>

.tags {
  font-size: 14px;
  > .current {
    display: flex;
    > li {
      display: flex;
      align-items: center;
      background: #d9d9d9;
      $h: 24px;
      height: $h;
      border-radius: $h/2;
      padding: 0 20px;
      margin-right: 12px;
    }
  }
}

</style>