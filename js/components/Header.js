/**
 * Creates a header component with title and current date
 * @returns {HTMLElement} The header element
 */
export function createHeader() {
  const header = document.createElement("header");
  header.classList.add("app-header");

  const title = createTitle("App for your notes");
  const date = createDate();

  date.textContent = getFormattedDate();

  header.append(title, date);

  /**
   * Creates a title element
   * @param {string} titleText - The text to display in the title
   * @returns {HTMLElement} The title element
   */
  function createTitle(titleText) {
    const title = document.createElement("h1");
    title.classList.add("app-header-title");
    title.textContent = titleText;

    return title;
  }

  /**
   * Creates a date element
   * @returns {HTMLElement} The date element
   */
  function createDate() {
    const date = document.createElement("p");
    date.classList.add("app-header-date");

    return date;
  }

  /**
   * Gets the current date formatted as a string
   * @returns {string} The formatted date string
   */
  function getFormattedDate() {
    const date = new Date();
    const formatter = new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    return formatter.format(date);
  }

  return header;
}
