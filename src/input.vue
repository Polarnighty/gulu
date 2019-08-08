<template>
  <div class="wrapper" :class="{error}">
    <input :value="value" type="text" :disabled="disabled" @change="$emit('change',$event)" />
    <template v-if="error">
      <icon name="error"></icon>
      <span class="errormessage">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  components: { Icon },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  },
  mounted() {
    console.log(this.disabled);
    console.log(this.value);
    console.log(this.error);
  }
};
</script>

<style lang="scss" scope>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;

.wrapper {
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5em;
  }

  > input {
    height: 32px;
    border: 1px solid $border-color;
    border-radius: 4px;
    padding: 0 8px;
    font-size: inherit;

    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
  }
  .errormessage {
    color: red;
  }

  &.error {
    > input {
      border-color: $red;
    }

    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
  }
}
</style>
