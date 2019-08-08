<template>
  <div class="collapseitem">
    <div class="title">{{title}}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>
<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapseitem {
  > .title {
    border: 1px solid red;
    border-radius: $border-radius;
  }
}
</style>

