import newsArticle from "./newsArticle.js";

export default function secondaryNews() {
  const secondaryNews = document.createElement('div');
  secondaryNews.classList.add('secondary-news');

  secondaryNews.append(newsArticle({title: 'Pavadinimas', data: '2022-11-10'}), newsArticle(), newsArticle(), newsArticle());
  
  return secondaryNews;
}