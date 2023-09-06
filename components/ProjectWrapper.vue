<template>
  <iframe class="project" :src="src" frameborder="0" loading="lazy"></iframe>
</template>

<script>
export default {
  props: ["src"],
};
</script>

<style lang="scss">
iframe.project {
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  scrollbar-gutter: stable both-edges;
}
</style>
