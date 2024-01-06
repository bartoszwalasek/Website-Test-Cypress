import { defineConfig } from "cypress";

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  video: true,
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress Tests Report",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true,
  },
  e2e: {
    baseUrl: "https://www.automationexercise.com/",
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
  },
});
