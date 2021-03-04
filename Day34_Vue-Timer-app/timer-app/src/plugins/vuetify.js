import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#05445E',
        secondary: '#189AB4',
        accent: '#75E6DA',
      },
    },
  },
});
