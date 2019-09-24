<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "layout",
  data() {
    return {
      layoutClass: {
        hasSlider: false
      }
    };
  },
  mounted() {
    this.$children.forEach(vm => {
      if (vm.$options.name === "Slider") {
        this.layoutClass.hasSlider = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.layout {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  &.hasSlider {
    flex-direction: row;
  }
}
</style>