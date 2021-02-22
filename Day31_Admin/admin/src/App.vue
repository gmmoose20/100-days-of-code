<template>
  <v-app>
    <Navbar />
    <v-main>
      Hello World
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
