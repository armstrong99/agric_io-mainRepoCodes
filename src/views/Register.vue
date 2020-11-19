<template>

  <div id="container">

    <section>
    
    </section>

    <section></section>
  </div>
</template>

<script>
export default {
  name: "Register",

  setup(props) {

  },

};
</script>

<style scoped>
#container {
  position: relative;
  display: grid;                              
  grid-template-columns: 25% 75%;
  overflow-x: hidden;
   
  @media screen and (max-width: 48rem) {
    grid-template-columns: 100%;
  }
}
</style>
