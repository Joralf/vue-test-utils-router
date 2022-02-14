<template>
  <button @click="redirect">Click to Edit</button>
  <router-link to="/posts/1">Go to posts edit</router-link>
  <router-view></router-view>
</template>

<script lang="ts">
import { useRouter, useRoute } from "vue-router";

import { defineComponent } from "vue";

export default defineComponent({
  props: ["isAuthenticated"],
  setup(props) {
    const router = useRouter();
    const route = useRoute();

    const redirect = () => {
      if (props.isAuthenticated) {
        router.push(`/posts/1`);
      } else {
        router.push("/404");
      }
    };

    return {
      redirect,
    };
  },
});
</script>
