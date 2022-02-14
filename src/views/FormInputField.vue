<template>
  <InputField
    :id="formFieldId"
    :name="formFieldId"
    v-model="value"
  ></InputField>
  <div v-if="errorMessage" data-testid="error-message">
    {{ errorMessage }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";

import InputField from "./InputField.vue";
import { useField } from "vee-validate";

export default defineComponent({
  props: {
    formFieldId: {
      type: String as PropType<string>,
      required: true,
    },
  },
  components: {
    InputField,
  },
  setup(props) {
    const { errorMessage, value } = useField<string | undefined>(
      props.formFieldId
    );

    return {
      errorMessage,
      value,
    };
  },
});
</script>
