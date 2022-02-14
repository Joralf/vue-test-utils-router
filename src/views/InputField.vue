<template>
  <input :id="id" :name="name" type="text" v-model="modelValueInternal" />
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";
import { computed } from "vue";

export default defineComponent({
  props: {
    id: {
      type: String as PropType<string>,
    },
    name: {
      type: String as PropType<string>,
    },
    modelValue: {
      type: String as PropType<string>,
    },
  },
  components: {},
  setup(props, { emit }) {
    const modelValueInternal = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value || undefined),
    });

    return {
      modelValueInternal,
    };
  },
});
</script>
