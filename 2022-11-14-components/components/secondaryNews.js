import newsArticle from "./newsArticle.js";

export default function secondaryNews() {
  const secondaryNews = document.createElement('div');
  secondaryNews.classList.add('secondary-news');

  secondaryNews.append(newsArticle(), newsArticle(), newsArticle(), newsArticle());
  
  return secondaryNews;
}