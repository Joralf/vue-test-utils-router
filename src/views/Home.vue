<template>
  <div data-testid="homepage">
    <h1>This is home page</h1>
    <router-link to="/somepage"></router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  setup() {
    // Store and router setup
    const router = useRouter();

    return {};
  },
});
</script>
