import { App } from "./components/index.js";

function init() {
  const container = document.createElement("div");
  container.id = "app";
  document.body.appendChild(container);

  App();
}

init();
