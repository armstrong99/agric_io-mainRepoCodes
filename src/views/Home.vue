<template>
  <div
    style="
      background-image: url(https://media.giphy.com/media/41fUblVkZ0QForRGrH/giphy.gif);
    "
    class="text-white bg-black-700 bg-no-repeat bg-center bg-cover h-screen"
  >
    <div class="absolute inset-0 bg-black opacity-75 h-full flex flex-col">
      <header>
        <NavBar />
      </header>

      <article class="self-start pl-20 my-auto mx-0">
        <span id="spanLine"></span>
        <h4 class="text-sm font-medium text-justify mt-4">THIS IS STEWARD</h4>
        <h1 class="text-5xl font-sans text-justify mt-6">
          The World's First <br />
          Crowdfarming<sup class="text-xl">TM</sup><br />
          Platform
        </h1>

        <p class="text-gray-600 mt-6 text-justify">
          We connect you to the world as we provide
        </p>
        <p class="text-gray-500 mt-0 text-justify">
          you with top management software
        </p>
      </article>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Home",
  components: {
    NavBar,
  },
};
</script>

<style scoped>
#spanLine {
  display: block;
  background: #08ff00;
  width: 20rem;
  height: 0.5rem;
  border-radius: 5rem;
}
</style>
