export default function podcastItem() {
  const podcast = document.createElement('div');
  podcast.classList.add('podcast');

  podcast.innerHTML = `<img class="podcast-image" src="podcast-image-without-border.jpg">
                       <span class="podcast-time">Trukmė: 7:55</span>
                       <button class="podcast-play">Play</button>
                       <div class="podcast-info">
                         <h3 class="podcast-title">Pojūčius pirštų galiukams sugrąžinti gali smegenų implantas</h3>
                        <span class="podcast-date">2022-09-05</span>
                       </div>`;

  return podcast;
}
