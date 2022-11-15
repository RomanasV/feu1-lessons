import podcastsList from "./podcastsList.js";

export default function podcasts() {
  const podcastsElement = document.createElement('div');
  podcastsElement.classList.add('podcasts');

  const title = document.createElement('h2');
  title.textContent = 'Podcastai ir radijo laidos';

  podcastsElement.append(title, podcastsList());

  return podcastsElement;
}