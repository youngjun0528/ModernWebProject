<template>
  <div>
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-cog</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left color="indigo" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Vue.js - Django Web Programming</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn text href="/">Home</v-btn>
      <v-btn text href="/blog/post/list">Blog</v-btn>
      <v-btn text href="/admin">Admin</v-btn>
      <v-btn text>/</v-btn>
      <v-btn text href="/post_list.html">PostList</v-btn>
      <v-btn text href="/post_detail.html">PostDetail</v-btn>

      <v-menu offset-y left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn text v-bind="attrs" v-on="on">
            <v-icon>mdi-account</v-icon>
            Anonymous
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item @click="dialog.login = true">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
          <v-list-item @click="dialog.register = true">
            <v-list-item-title>Register</v-list-item-title>
          </v-list-item>
          <v-list-item>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
          <v-list-item @click="dialog.pwdchg = true">
            <v-list-item-title>Password Change</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <!-- login dialog -->
    <v-dialog v-model="dialog.login" max-width="600">
      <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
          <v-toolbar-title>Login form</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form id="login-form">
            <v-text-field
              label="Username"
              name="username"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>

            <v-text-field
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="grey" @click="cancel('login')">Cancel</v-btn>
          <v-btn color="primary" class="mr-5" @click="save('login')"
            >Login</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- register dialog -->
    <v-dialog v-model="dialog.register" max-width="600">
      <v-card class="elevation-12">
        <v-toolbar color="success" dark flat>
          <v-toolbar-title>Register form</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Username"
              name="username"
              prepend-icon="mdi-account"
              type="text"
            ></v-text-field>

            <v-text-field
              label="Password"
              name="password1"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              label="Password again"
              name="password2"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="grey" @click="dialog.register = false"
            >Cancel</v-btn
          >
          <v-btn color="success" class="mr-5" @click="dialog.register = false"
            >Register</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>

    <!-- pwd change dialog -->
    <v-dialog v-model="dialog.pwdchg" max-width="600">
      <v-card class="elevation-12">
        <v-toolbar color="warning" dark flat>
          <v-toolbar-title>Password change form</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Old Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              label="New Password"
              name="new_password1"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
            <v-text-field
              label="New Password again"
              name="new_password2"
              prepend-icon="mdi-lock"
              type="password"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text color="grey" @click="dialog.pwdchg = false">Cancel</v-btn>
          <v-btn color="warning" class="mr-5" @click="dialog.pwdchg = false"
            >Password Change</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from "axios";

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

export default {
  data: () => ({
    drawer: null,
    dialog: {
      login: false,
      register: false,
      pwdchg: false,
    },
    me: {},
  }),

  methods: {
    cancel(kind) {
      console.log("cancel()...", kind);
      if (kind == "login") this.dialog.login = false;
      else if (kind == "register") this.dialog.register = false;
      else if (kind == "pwdchg") this.dialog.pwdchg = false;
    },

    save(kind) {
      console.log("save()...", kind);
      if (kind == "login") {
        this.login();
        this.dialog.login = false;
      } else if (kind == "register") {
        this.register();
        this.dialog.register = false;
      } else if (kind == "pwdchg") {
        this.pwdchg();
        this.dialog.pwdchg = false;
      }
    },

    login() {
      console.log("login()...");
      const postData = new FormData(document.getElementById("login-form"));
      axios
        .post("/api/login/", postData)
        .then((res) => {
          console.log("LOGIN POST RES", res);
          // alert(`user ${res.data.username} login OK.`);
          this.me = res.data;
        })
        .catch((err) => {
          console.log("LOGIN POST ERR.RESPONSE", err.response);
          alert("login NOK");
        });
    },
  },
};
</script>

<style>
</style>