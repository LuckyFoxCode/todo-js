import { App } from "./components/index.js";

const init = () => {
  const container = document.createElement("div");
  container.id = "app";
  document.body.appendChild(container);

  App();
};

init();
