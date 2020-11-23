<template>
  <section class="h-full w-full flex items-center justify-center overflow-hidden flex-col">
    <img :src="Logo" alt="error occured page does not exist for now" />
    <br />
    <br />
    <h3 class="font-sans font-medium text-gray-600">Page does not exist for now</h3>
  </section>
</template>

<script>
export default {
  name: "page-not-found",
  setup() {
    const Logo = require("../assets/img/errorPage.png");

    return { Logo };
  },
};
</script>

<style lang="scss"></style>
