<template>
  <div class="g-button-group">
    <slot />
  </div>
</template>
<script>
export default {
  mounted() {
    //判断g-button写的对不对
    for (let node of this.$el.children) {
      let name = node.nodeName.toLowerCase();
      if (name !== "button") {
        console.warn(`g-button-group的子元素应该是button,但你的却是${name}`);
      }
    }
  }
};
</script>

<style lang="scss" scope>
$border-radius: 4px;
.g-button-group {
  display: inline-flex;
  vertical-align: top;
  > .g-button {
    border-radius: 0;
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:first-child {
      border-top-left-radius: $border-radius;
      border-bottom-left-radius: $border-radius;
    }
    &:last-child {
      border-top-right-radius: $border-radius;
      border-bottom-right-radius: $border-radius;
    }
    &:hover {
      position: relative;
      z-index: 1;
    }
  }
}
</style>
