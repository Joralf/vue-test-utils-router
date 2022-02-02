<template>
    <h1>Posts</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.name }}
      </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const posts = [{ id: 1, name: 'Testing Vue Router' }];

    return { posts };
  },
});
</script>
