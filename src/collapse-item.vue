<template>
  <div class="collapseitem">
    <div class="title" @click="toggle">{{title}}</div>
    <div class="content" v-if="open">
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
  },
  data() {
    return {
      open: false
    };
  },
  inject: ["eventBus"],
  methods: {
    toggle() {
      if (this.open) {
        this.open = false;
      } else {
        this.open = true;
        this.eventBus && this.eventBus.$emit("update:addSelected", this);
      }
    },
    close() {
      this.open = false;
    }
  },
  mounted() {
    this.eventBus &&
      this.eventBus.$on("update:addSelected", vm => {
        if (vm !== this) {
          this.close();
        }
      });
  }
};
</script>
<style lang="scss" scoped>
$grey: #ddd;
$border-radius: 4px;
.collapseitem {
  > .title {
    border: 1px solid $grey;
    border-radius: $border-radius;
    margin-top: -1px;
    margin-left: -1px;
    margin-right: -1px;
    min-height: 32px;
    display: flex;
    align-items: center;
    padding: 0 8px;
  }
  &:first-child {
    > .title {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  &:last-child {
    > .title:last-child {
      border-top-left-radius: $border-radius;
      border-top-right-radius: $border-radius;
    }
  }
  > .content {
    padding: 8px;
  }
}
</style>

