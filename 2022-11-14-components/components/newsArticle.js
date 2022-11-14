export default function newsArticle() {
  const newsArticleElement = document.createElement('div');
  newsArticleElement.classList.add('news-article');

  newsArticleElement.innerHTML = `<a href="#">
                                    <div class="image-wrapper">
                                      <img src="https://codeacademy.lt/wp-content/uploads/2022/03/charlesdeluvio-FdDkfYFHqe4-unsplash-1536x1491.jpg">
                                    </div>
                                    <div class="info-wrapper">
                                      <span class="category">Naujienos</span>
                                      <h3 class="news-title">Dezinformacija ir kibernetinis pavojus: kaip apsisaugoti?</h3>
                                      <span class="article-date">2022-02-23</span>
                                    </div>
                                  </a>`;

  return newsArticleElement;
}