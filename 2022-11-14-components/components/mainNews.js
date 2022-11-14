import newsArticle from "./newsArticle.js";

export default function mainNews() {
  const mainNews = document.createElement('div');
  mainNews.classList.add('main-news');

  mainNews.append(newsArticle(), newsArticle());

  return mainNews;
}