<template>
  <form>
    <FormInputField formFieldId="name" />
  </form>
</template>
<script lang="ts">
import { useForm } from "vee-validate";
import FormInputField from "./FormInputField.vue";
import { defineComponent } from "vue";
import * as yup from "yup";

export default defineComponent({
  components: {
    FormInputField,
  },
  setup() {
    const form = useForm({
      validationSchema: yup.object({
        name: yup.string().required(),
      }),
    });
  },
});
</script>
