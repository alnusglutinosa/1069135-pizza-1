<template>
  <div class="app-layout">
    <IndexHome />
  </div>
</template>

<script>
import IndexHome from "@/views/Index.vue";

export default {
  name: "AppLayout",
  components: {
    IndexHome,
  },
};
</script>
