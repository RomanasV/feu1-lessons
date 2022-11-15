import podcastItem from "./podcastItem.js";

export default function podcastsList() {
  const podcastsWrapper = document.createElement('div');
  podcastsWrapper.classList.add('podcasts-wrapper');

  podcastsWrapper.append(podcastItem(), podcastItem(), podcastItem(), podcastItem());

  return podcastsWrapper;
}