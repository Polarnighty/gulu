<template>
  <div>
    <z-button>默认按钮</z-button>
    <z-button icon="settings" :loading="true">按钮</z-button>
    <z-button icon="settings" icon-position="right">按钮</z-button>
  </div>
</template>

<script>
import Button from "../../../src/button/button";

export default {
  data() {
    return {
      loading: false,
      toggle: false
    };
  },
  components: {
    "z-button": Button,
    "z-button-group": ButtonGroup
  }
};
</script>

