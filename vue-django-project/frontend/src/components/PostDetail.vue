<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="12" lg="10">
        <h1>{{ post.title }}</h1>
        <p>{{ post.modify_dt }}, written by {{ post.owner }}</p>
      </v-col>
    </v-row>
    <v-row align="start" justify="center">
      <v-col cols="12" sm="8" lg="7">
        <v-card class="pa-2" outlined tile>
          <p style="white-space: pre-wrap">{{ post.content }}</p>
          <div>
            <strong>TAGS:</strong>
            <v-chip
              class="ma-2 my-hover"
              outlined
              v-for="(tag, index) in post.tags"
              v-bind:key="index"
              @click="serverPage(tag)"
            >
              {{ tag }}
            </v-chip>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4" lg="3">
        <v-card class="pa-2 mb-5" tile>
          <p>Prev Post</p>
          <h2
            class="my-hover"
            v-if="post.prev"
            @click="fetchPostDetail(post.prev.id)"
          >
            {{ post.prev.title }}
          </h2>
        </v-card>
        <v-card class="pa-2 mb-5" tile>
          <p>Next Post</p>
          <h2
            class="my-hover"
            v-if="post.next"
            @click="fetchPostDetail(post.next.id)"
          >
            {{ post.next.title }}
          </h2>
        </v-card>
        <v-card class="pa-2 mb-5" tile>
          <h2>Tag Cloud</h2>
          <v-chip
            v-for="(tag, index) in tagCloud"
            @click="serverPage(tag.name)"
            v-bind:key="index"
            class="ma-2 my-hover"
            :color="tag.color"
            text-color="white"
          >
            <v-avatar left :class="tag.color + ' darken-4'"
              >{{ tag.count }} </v-avatar
            >{{ tag.name }}
          </v-chip>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  name: "PostDetail",

  data: () => ({
    post: {},
    tagCloud: [],
  }),

  created() {
    console.log("created()...");
    // // axios 에서 호출이 완료 되기 전에 post 값을 할당하기 때문에 미리 초기화
    // this.post.prev = {};
    // this.post.next = {};
    // v-if 를 통해서 axios 에서 데이터를 가져오기 전까지는, 즉, 참이 되기 전까지 화면을 랜더링 하지 않는다.
    // https://v3.ko.vuejs.org/guide/conditional.html#v-if-%E1%84%83%E1%85%A2-v-show
    // const postId = location.pathname.split("/")[3] || 1;
    const postId = location.pathname.split("/")[3];

    // front-end only
    // const params = new URL(location).searchParams;
    // const postId = params.get('id');

    this.fetchPostDetail(postId);
    this.fetchTagCloud();
  },

  methods: {
    fetchPostDetail(postId) {
      console.log("fetchPostDetail()...", postId);
      axios
        .get(`/api/post/${postId}`) // ES6 Template Literal
        .then((res) => {
          console.log("POST DETAIL GET RESPONSE", res);
          this.post = res.data;
        })
        .catch((err) => {
          console.log("POST DETAIL GET ERR_RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },
    fetchTagCloud() {
      console.log("fetchTagCloud()...");
      axios
        .get(`/api/tag/cloud`) // ES6 Template Literal
        .then((res) => {
          console.log("TAG CLOUD GET RESPONSE", res);
          this.tagCloud = res.data;
          // tag.weight
          this.tagCloud.forEach((element) => {
            if (element.weight === 3) element.color = "green";
            else if (element.weight === 2) element.color = "blue-grey";
            else if (element.weight === 1) element.color = "grey";
          });
        })
        .catch((err) => {
          console.log("TAG CLOUD GET ERR_RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },
    serverPage(tagName) {
      console.log("tagName()...", tagName);
      location.href = `/blog/post/list/?tagname=${tagName}`;

      // front-end only
      // location.href = `/post_list.html?tagname=${tagName}`;
    },
  },
};
</script>

<style scoped>
.my-hover:hover {
  cursor: pointer;
  font-style: italic;
}
</style>