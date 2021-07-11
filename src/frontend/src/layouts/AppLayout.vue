<template>
  <div class="app-layout">
    <AppLayoutHeader />
    <IndexHome />
  </div>
</template>

<script>
import AppLayoutHeader from "@/views/AppLayoutHeader";
import IndexHome from "@/views/Index.vue";

export default {
  name: "AppLayout",
  components: {
    AppLayoutHeader,
    IndexHome,
  },
};
</script>
