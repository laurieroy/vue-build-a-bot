<template>
  <div class="home">
    <img
      class="rotbot"
      src="../assets/robot-home.png"
      alt="robot"
      aria-hidden="true"
    />
    <div class="get-started">
      <router-link to="/builder">Get Started</router-link> building your first robot!
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  created() {
    console.log(process.env.APP_VUE_TEST);
  },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    text-align: center;
  }
  .robot {
    height: 300px;
  }
</style>
