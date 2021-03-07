<template>
  <v-app>
    <Navbar />

    <v-main>
      Hello Awesome Timer

    </v-main>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    timerState: 'stopped',
    currentTimer: 0,
    formattedTime: "00:00:00",
    ticker: undefined,
    laps: [],
    latestLap: "",
    snackbar: false
  }),
};
</script>
