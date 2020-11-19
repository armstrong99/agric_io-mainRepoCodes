<template>
  <nav class="flex px-16 py-5 font-sans">
    <section class="flex justify-around w-64">
      <router-link to="/"> <img src="" alt="logo" /> </router-link>
      <router-link to="/">
        <li class="list-none font-semibold">Home</li>
      </router-link>
      <router-link to="/">
        <li class="list-none font-semibold">Blog</li>
      </router-link>
      <router-link to="/">
        <li class="list-none font-semibold">Contact</li>
      </router-link>
    </section>
    <section class="flex ml-auto justify-around w-32">
      <router-link to="/">
        <li class="list-none font-semibold">Login</li>
      </router-link>
      <router-link to="/register">
        <li id="btnSignUp" class="list-none font-semibold font-sans">
          Sign up
        </li>
      </router-link>
    </section>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
};
</script>

<style scoped>
#btnSignUp {
  background: #026c09;
  padding: 0.3rem;
  align-self: center;
  width: 5rem;
  margin-left: 1rem;
  font-weight: bold;
  text-align: center;
}
</style>
