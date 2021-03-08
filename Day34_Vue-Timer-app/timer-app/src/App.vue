<template>
  <v-app>
    <Navbar :laps="laps"/>

    <v-main>
      <Timer 
        :timer="formattedTime" 
        :state="timerState"
        @start="start"
        @lap="lap"
        @pause="pause"
        @reset="reset"
      />
    </v-main>
    <v-snackbar
      v-model="snackbar"
      color="info"
      :timeout="2000"
    >
    New Lap {{this.latestLap}}
    <v-btn dark text @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
import Timer from '@/components/Timer'

export default {
  name: 'App',

  components: {
    Navbar,
    Timer
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

  methods: {
    start () {
      if (this.timerState !== 'running') {
        this.tick();
        this.timerState = 'running'
      }
    },
    lap () {
      this.snackbar = true;
      this.laps.push({
        seconds: this.currentTimer,
        formattedTime: this.formatTime(this.currentTimer)
      });
      this.latestLap = this.formatTime(this.currentTimer);
      this.currentTimer = 0;
    },
    pause () {
      window.clearInterval(this.ticker);
      this.timerState = "paused";
    },
    reset () {
      window.clearInterval(this.ticker);
      this.currentTimer = 0;
      this.formattedTime = "00:00:00";
      this.timerState = "reset"
    },
    tick () {
      this.ticker = setInterval(() => {
        this.currentTimer++;
        this.formattedTime = this.formatTime(this.currentTimer);
      }, 250);
    },
    formatTime (seconds) {
      // Gets date
      let measuredTime = new Date(null);
      measuredTime.setSeconds(seconds);
      // Convert measured time to string and get substring
      let MHSTime = measuredTime.toISOString().substr(11,8);

      return MHSTime;
    }
  }
};
</script>
