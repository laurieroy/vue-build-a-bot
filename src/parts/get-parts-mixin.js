export default {
  created() {
    this.$store.dispatch('getParts');
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
