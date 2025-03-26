import { createHeader, createFooter, createMainContent } from "./index.js";

/**
 * Creates the main application container with header, main content and footer
 * @returns {HTMLElement} The complete application container
 */
export function createApp() {
  const app = document.createElement("div");
  app.classList.add("app");

  const header = createHeader();
  const footer = createFooter();
  const main = createMainContent();

  app.append(header, main, footer);

  return app;
}
