<template>
  <nav>
    <v-app-bar app dark class="secondary">
      <v-app-bar-nav-icon @click="isDrawerOpen = !isDrawerOpen"/>
        <v-app-bar-title class="headline text-uppercase">
          <span class="font-weight-black primary--text">Gm's</span>
          <span class="font-weight-light">Awesome Timer</span>
        </v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer app dark v-model="isDrawerOpen">
      <v-app-bar class="secondary">
        <v-app-bar-title class="title">Laps</v-app-bar-title>
      </v-app-bar>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => {
    return {
      isDrawerOpen: false
    }
  }
}
</script>