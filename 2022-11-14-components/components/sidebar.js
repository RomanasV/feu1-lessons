import events from "./events.js";
import podcasts from "./podcasts.js";

export default function sidebar() {
  const sidebarElement = document.createElement('div');
  sidebarElement.classList.add('sidebar');

  const podcastsElement = podcasts();
  const eventsElement = events();

  sidebarElement.append(podcastsElement, eventsElement);

  return sidebarElement;
}