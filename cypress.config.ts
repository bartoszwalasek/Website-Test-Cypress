import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
