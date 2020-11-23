<template>
  <div style="background-image: url(https://media.giphy.com/media/41fUblVkZ0QForRGrH/giphy.gif)" class="text-white bg-black-700 w-full bg-no-repeat bg-center bg-cover h-screen overflow-hidden">
    <div class="absolute inset-0 bg-black opacity-75 h-screen flex flex-col">
      <header>
        <NavBar />
      </header>

      <article class="self-start md:pl-20 pl-3 my-auto mx-0">
        <span id="spanLine"></span>
        <h4 class="md:text-sm text-xs font-medium text-justify mt-1 md:mt-4">THIS IS STEWARD</h4>
        <h1 class="md:text-5xl font-sans text-3xl text-justify mt-2 md:mt-6">
          The World's First <br />
          Crowdfarming<sup class="md:text-xl text-sm">TM</sup><br />
          Platform
        </h1>

        <p class="text-gray-600 mt-6 text-justify">We connect you to the world as we provide</p>
        <p class="text-gray-600 mt-0 text-justify">you with top management software</p>
      </article>

      <section class="flex justify-around mt-0 mb-12 md:hidden items-center w-screen" id="authLinksMobile">
        <router-link to="/dashboard">
          <li class="list-none font-semibold">Login</li>
        </router-link>
        <router-link to="/dashboard">
          <li id="btnSignUp" class="list-none font-semibold font-sans">Sign up</li>
        </router-link>
      </section>
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

<style lang="scss">
#spanLine {
  display: block;
  background: #08ff00;
  width: 20rem;
  height: 0.5rem;
  border-radius: 5rem;

  @media screen and (max-width: 48rem) {
    width: 12rem;
  }
}
</style>
