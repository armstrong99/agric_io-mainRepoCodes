<template>
  <nav class="flex md:px-16 px-8 md:py-5 py-3 font-sans">
    <section class="flex md:justify-around justify-between items-center w-80 md:w-64" id="navContent">
      <router-link to="/about">
        <figure class="w-100">
          <img :src="Logo" class="md:w-16 md:h-16" alt="agric_io" />
        </figure>
      </router-link>
      <router-link to="/">
        <li class="list-none font-semibold">Home</li>
      </router-link>
      <router-link to="/blog">
        <li class="list-none font-semibold">Blog</li>
      </router-link>
      <router-link to="/contact">
        <li class="list-none font-semibold">Contact</li>
      </router-link>
    </section>
    <section class="flex ml-auto justify-around items-center w-32" id="authLinks">
      <router-link to="/dashboard">
        <li class="list-none font-semibold">Login</li>
      </router-link>
      <router-link to="/dashboard">
        <li id="btnSignUp" class="list-none font-semibold font-sans">Sign up</li>
      </router-link>
    </section>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  setup() {
    const Logo = require("../assets/img/myl.png");

    return { Logo };
  },
};
</script>

<style lang="scss">
#authLinks {
  @media screen and (max-width: 48rem) {
    display: none;
  }
}
#btnSignUp {
  background: #026c09;
  padding: 0.3rem;
  align-self: center;
  width: 5rem;
  margin-left: 1rem;
  font-weight: bold;
  text-align: center;
}
#navContent {
  @media screen and (max-width: 48rem) {
    display: flex;
    flex-direction: row;
    justify-content: center;

    & li {
      margin-left: 1rem;
    }
    & img {
      height: auto;
      width: auto;
    }
  }
}
</style>
