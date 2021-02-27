<template>
  <nav>
    <v-app-bar app dark>
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen" />
      <v-toolbar-title>
        <span class="font-weight-black">Awesome SOUNDBOARD</span>
        <span class="font-weight-light">App</span>
      </v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer dark app v-model="isDrawerOpen">
      <v-list>
        <v-list-item @click="navigate('/')">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigate('about')">
          <v-list-item-action>
            <v-icon>info</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>About</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item @click="navigate('support')">
          <v-list-item-action>
            <v-icon>live_help</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Support</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      isDrawerOpen: false,
    };
  },
  methods: {
    navigate: function (route) {
      this.$router.push(route);
    }
  }
};
</script>