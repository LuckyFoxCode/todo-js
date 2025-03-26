import { createHeader, createFooter, createMainContent } from "./index.js";

export function createApp() {
  const app = document.createElement("div");
  app.classList.add("app");

  const header = createHeader();
  const footer = createFooter();
  const main = createMainContent();

  app.append(header, main, footer);

  return app;
}
