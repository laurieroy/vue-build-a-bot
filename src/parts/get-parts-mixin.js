export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    parts() {
      return (
        this.$store.state.robots.parts || {
          arms: [],
          bases: [],
          heads: [],
          torsos: [],
        }
      );
    },
  },
};
