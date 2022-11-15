import largeButton from "./largeButton.js";
import mainNews from "./mainNews.js";
import secondaryNews from "./secondaryNews.js";

export default function news(props) {
  const newsElement = document.createElement('div');
  newsElement.classList.add('news');

  const pageTitle = document.createElement('h1');
  pageTitle.textContent = props.title;

  newsElement.append(pageTitle, mainNews(), secondaryNews(), largeButton());

  return newsElement;
}