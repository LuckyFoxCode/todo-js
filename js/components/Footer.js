/**
 * Creates a footer component with copyright and GitHub link
 * @returns {HTMLElement} The footer element
 */
export function createFooter() {
  const footer = document.createElement("footer");
  footer.classList.add("app-footer");

  const copyright = createCopyright();
  const link = githubLink();

  footer.append(copyright, link);

  return footer;

  /**
   * Creates a copyright element with current year
   * @returns {HTMLElement} The copyright element
   */
  function createCopyright() {
    const getYear = new Date().getFullYear();
    const copyright = document.createElement("p");
    copyright.classList.add("app-footer-copyright");
    copyright.innerHTML = `&copy; ${getYear} Created with practice in vanilla JavaScript`;

    return copyright;
  }

  /**
   * Creates a GitHub link with icon
   * @returns {HTMLElement} The link element
   */
  function githubLink() {
    const githubIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M11.999 1C5.926 1 1 5.925 1 12c0 4.86 3.152 8.983 7.523 10.437c.55.102.75-.238.75-.53c0-.26-.009-.952-.014-1.87c-3.06.664-3.706-1.475-3.706-1.475c-.5-1.27-1.221-1.61-1.221-1.61c-.999-.681.075-.668.075-.668c1.105.078 1.685 1.134 1.685 1.134c.981 1.68 2.575 1.195 3.202.914c.1-.71.384-1.195.698-1.47c-2.442-.278-5.01-1.222-5.01-5.437c0-1.2.428-2.183 1.132-2.952c-.114-.278-.491-1.397.108-2.91c0 0 .923-.297 3.025 1.127A10.5 10.5 0 0 1 12 6.32a10.5 10.5 0 0 1 2.754.37c2.1-1.424 3.022-1.128 3.022-1.128c.6 1.514.223 2.633.11 2.911c.705.769 1.13 1.751 1.13 2.952c0 4.226-2.572 5.156-5.022 5.428c.395.34.747 1.01.747 2.037c0 1.47-.014 2.657-.014 3.017c0 .295.199.637.756.53C19.851 20.979 23 16.859 23 12c0-6.075-4.926-11-11.001-11"/></svg>`;

    const link = document.createElement("a");
    link.classList.add("app-footer-link");
    link.innerHTML = `${githubIcon} LuckyFoxCode`;
    link.href = "https://github.com/LuckyFoxCode";
    link.target = "_blank";

    return link;
  }
}
