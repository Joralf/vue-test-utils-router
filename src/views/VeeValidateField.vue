<template>
  <div>
    <input v-model="value" type="text" />
    <span v-if="errorMessage" data-testid="error-message">{{
      errorMessage
    }}</span>
  </div>
</template>

<script lang="ts">
import { useField } from "vee-validate";
import { defineComponent } from "vue";
import * as yup from "yup";

export default defineComponent({
  setup() {
    const { errorMessage, value } = useField(
      "fieldName",
      yup.string().required()
    );

    return {
      errorMessage,
      value,
    };
  },
});
</script>
