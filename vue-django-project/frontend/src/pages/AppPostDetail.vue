<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main>
      <PostDetail />
    </v-main>

    <v-footer app>
      <span>&copy; 2021</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import PostDetail from "../components/PostDetail.vue";

export default {
  components: { PostDetail, MainMenu },

  // props: {
  //   source: String,
  // },

  data: () => ({
    // drawer: null,
  }),

  created() {
    // this.$vuetify.theme.dark = true
  },
};
</script>