export const App = () => {
  const todo = [];

  const render = () => {
    const root = document.querySelector("#app");
    root.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "TODO JS";

    root.appendChild(title);
  };

  render();
};
