import header from "./components/header.js";
import news from "./components/news.js";
import sidebar from "./components/sidebar.js";

const root = document.querySelector("#root");

const headerElement = header();

const container = document.createElement("div");
container.classList.add("container");

const contentWrapper = document.createElement("div");
contentWrapper.classList.add("content-wrapper");

const newsElement = news({ title: 'News' });
const sidebarElement = sidebar();

contentWrapper.append(newsElement, sidebarElement);
container.append(contentWrapper);

root.append(headerElement, container);
