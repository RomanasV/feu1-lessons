import mainNews from "./mainNews.js";
import secondaryNews from "./secondaryNews.js";

export default function news() {
  const newsElement = document.createElement('div');
  newsElement.classList.add('news');

  newsElement.append(mainNews(), secondaryNews());

  return newsElement;
}