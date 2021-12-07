<template>
  <v-app id="inspire">
    <MainMenu></MainMenu>

    <v-main>
      <PostList />
    </v-main>

    <v-footer app>
      <span>&copy; 2021</span>
    </v-footer>
  </v-app>
</template>

<script>
import MainMenu from "../components/MainMenu.vue";
import PostList from "../components/PostList.vue";

export default {
  components: { PostList, MainMenu },

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