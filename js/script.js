import { createApp } from "./components/index.js";

function init() {
  const root = document.querySelector("body");
  root.innerHTML = "";

  const app = createApp();

  root.append(app);
}

init();
