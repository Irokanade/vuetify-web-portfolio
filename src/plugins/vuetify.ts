/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#00599c",
          secondary: "#004482",
          background: "#ffffff",
          surface: "#ffffff",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#659ad2",
          secondary: "#004482",
          background: "#071826",
          surface: "#0d2438",
        },
      },
    },
  },
});
