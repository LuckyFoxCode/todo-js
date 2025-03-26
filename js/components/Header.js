export function createHeader() {
  const header = document.createElement("header");
  header.classList.add("app-header");

  const title = document.createElement("h1");
  title.classList.add("app-header-title");
  title.innerHTML = "Todo App";

  header.append(title);

  return header;
}
