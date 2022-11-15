import eventsList from "./eventsList.js";
import largeButton from "./largeButton.js";

export default function events() {
  const eventsElement = document.createElement('div');
  eventsElement.classList.add('events');

  const title = document.createElement('h2');
  title.textContent = 'Renginiai';

  const eventsWrapper = eventsList();
  const moreButton = largeButton();

  eventsElement.append(title, eventsWrapper, moreButton);

  return eventsElement;
}