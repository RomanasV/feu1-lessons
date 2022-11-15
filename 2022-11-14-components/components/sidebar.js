import podcasts from "./podcasts.js";

export default function sidebar() {
  const sidebarElement = document.createElement('div');
  sidebarElement.classList.add('sidebar');

  sidebarElement.append(podcasts());

  return sidebarElement;
}