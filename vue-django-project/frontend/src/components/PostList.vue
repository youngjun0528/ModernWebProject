<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="posts"
      sort-by="name"
      class="elevation-1"
      :items-per-page="5"
      @click:row="serverPage"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title
            >Post List
            <span v-if="tagname" class="body-1 font-italic ml-3"
              >(with {{ tagname }} tagged)</span
            >
          </v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            dark
            class="mb-2"
            @click.stop="dialogOpen('create')"
          >
            New Post
          </v-btn>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-icon small class="mr-2" @click.stop="dialogOpen('update', item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click.stop="deletePost(item)"> mdi-delete </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="fetchPostList"> Reset </v-btn>
      </template>
    </v-data-table>
    <v-dialog v-model="dialog" max-width="800px">
      <v-card>
        <v-card-title>
          <span class="text-h5">{{ formTitle }}</span>
        </v-card-title>

        <v-card-text>
          <v-form id="post-form" ref="postForm">
            <v-text-field
              label="ID"
              name="id"
              v-model="editedItem.id"
              readonly
            ></v-text-field>
            <v-text-field
              label="TITLE"
              name="title"
              v-model="editedItem.title"
            ></v-text-field>
            <v-text-field
              label="DESCRIPTION"
              name="description"
              v-model="editedItem.description"
            ></v-text-field>
            <v-textarea
              outlined
              label="CONTENT"
              name="content"
              v-model="editedItem.content"
            ></v-textarea>
            <v-text-field
              label="OWNER"
              name="owner"
              v-model="editedItem.owner"
              readonly
            ></v-text-field>
            <v-text-field
              label="TAGS"
              name="tags"
              v-model="editedItem.tags"
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="cancel"> Cancel </v-btn>
          <v-btn color="blue darken-1" text @click="save"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import axios from "axios";
import EventBus from "./event_bus";

export default {
  name: "PostList",

  /** 컴포넌트 간 통신 방법
   * 1. Props down, event up : 부모 자식 컴포넌트 관계인 경우
   * 2. EventBus : 공유 데이터가 간단한 경우
   * 3. Vuex : 공유 데이터 규모가 큰 경우
   */

  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "start",
        sortable: false,
        value: "id",
      },
      { text: "Title", value: "title" },
      { text: "Description", value: "description" },
      { text: "Modified Date", value: "modify_dt" },
      { text: "Owner", value: "owner" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    posts: [],
    tagname: "",
    editedIndex: -1,
    editedItem: {
      // id: "",
      // title: "",
      // description: "",
      // content: "",
      // owner: "",
      // tags: "",
    },
    // defaultItem: {
    //   id: "",
    //   title: "",
    //   description: "",
    //   content: "",
    //   owner: "",
    //   tags: "",
    // },
    actionKind: "",
  }),

  computed: {
    formTitle() {
      // return this.editedIndex === -1 ? "Create Item" : "Update Item";
      if (this.actionKind === "create") return "Create Item";
      else return "Update Item";
    },
  },

  // watch: {
  //   dialog(val) {
  //     val || this.close();
  //   },
  //   dialogDelete(val) {
  //     val || this.closeDelete();
  //   },
  // },

  created() {
    const params = new URL(location).searchParams;
    this.tagname = params.get("tagname");
    this.fetchPostList();

    // EventHook 등록
    EventBus.$on("me_change", (val) => {
      this.me = val;
    });
  },

  methods: {
    fetchPostList() {
      console.log("fetchPostList()...", this.tagname);

      let getUrl = "";
      if (this.tagname) getUrl = `/api/post/list/?tagname=${this.tagname}`;
      else getUrl = "/api/post/list/";

      axios
        .get(getUrl)
        .then((res) => {
          console.log("POST LIST GET RESPONSE", res);
          this.posts = res.data;
        })
        .catch((err) => {
          console.log("POST LIST GET ERR_RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    serverPage(item) {
      console.log("serverPage()...", item);
      location.href = `/blog/post/${item.id}`;
      // front-end only
      // location.href = `/post_detail.html?id=${item.id}`;
    },

    dialogOpen(actionKind, item) {
      console.log("dialogOpen()...", actionKind);
      if (this.me.username === "Anonymous") {
        alert("Please login first !");
        return;
      }
      this.actionKind = actionKind;
      if (actionKind === "create") {
        this.editedIndex = -1;
        this.editedItem = {};
      } else {
        this.editedIndex = this.posts.indexOf(item);
        this.editedItem = Object.assign({}, item); // shallow copy(merge) / deep copy
      }
      this.dialog = true;
    },

    cancel() {
      console.log("cancel()...");
      this.dialog = false;
    },

    save() {
      console.log("save()...");
      if (this.actionKind === "create") this.createPost();
      else this.updatePost();
      this.dialog = false;
    },

    createPost() {
      console.log("createPost()...");
      const postData = new FormData(document.getElementById("post-form"));
      axios
        .post("/api/post/create/", postData)
        .then((res) => {
          console.log("CREATE POST POST RES", res);
          this.posts.push(res.data);
        })
        .catch((err) => {
          console.log("CREATE POST POST ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    updatePost() {
      console.log("updatePost()...");
      const postData = new FormData(document.getElementById("post-form"));
      postData.set("owner", this.me.id);
      axios
        .post(`/api/post/${this.editedItem.id}/update/`, postData)
        .then((res) => {
          console.log("UPDATE POST GET RES", res);
          this.posts.splice(this.editedIndex, 1, res.data);
        })
        .catch((err) => {
          console.log("UPDATE POST GET ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },

    deletePost(item) {
      console.log("deletePost()...", item);
      if (this.me.username === "Anonymous") {
        alert("Please login first !");
        return;
      }
      if (!confirm("Are you sure to delete ?")) return;
      axios
        .delete(`/api/post/${item.id}/delete`)
        .then((res) => {
          console.log("DELETE POST DELETE RES", res);
          const index = this.posts.indexOf(item);
          this.posts.splice(index, 1);
        })
        .catch((err) => {
          console.log("DELETE POST DELETE ERR.RESPONSE", err.response);
          alert(err.response.status + " " + err.response.statusText);
        });
    },
    // editItem(item) {
    //   this.editedIndex = this.posts.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialog = true;
    // },

    // deleteItem(item) {
    //   this.editedIndex = this.posts.indexOf(item);
    //   this.editedItem = Object.assign({}, item);
    //   this.dialogDelete = true;
    // },

    // deleteItemConfirm() {
    //   this.posts.splice(this.editedIndex, 1);
    //   this.closeDelete();
    // },

    // close() {
    //   this.dialog = false;
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem);
    //     this.editedIndex = -1;
    //   });
    // },

    // closeDelete() {
    //   this.dialogDelete = false;
    //   this.$nextTick(() => {
    //     this.editedItem = Object.assign({}, this.defaultItem);
    //     this.editedIndex = -1;
    //   });
    // },

    // save() {
    //   if (this.editedIndex > -1) {
    //     Object.assign(this.posts[this.editedIndex], this.editedItem);
    //   } else {
    //     this.posts.push(this.editedItem);
    //   }
    //   this.close();
    // },
  },
};
</script>

<style scoped>
/* .my-hover:hover {
  cursor: pointer;
} */
/* deep selector */
/* 부모 컴퍼넌트에 있는 엘리먼트 뿐만 아니라 자식 컴퍼넌트에도 동일한 클래스명이 있다면 전부 적용 */
.v-data-table >>> tbody > tr {
  cursor: pointer;
}
</style>