export default function eventItem(props) {
  let { title, day, month, location, image, url } = props;
  const event = document.createElement('div');
  event.classList.add('event');

  let eventImage = '';

  if (image) {
    eventImage = `<div class="image-wrapper">
                    <img src="${image}">
                  </div>`;
  }

  event.innerHTML = `<a href="${url}">
                      ${eventImage}
                      <div class="event-content-wrapper">
                        <div class="date">
                          <div class="day">${day}</div>
                          <div class="month">${month}</div>
                        </div>
                        <span class="event-place">${location}</span>
                        <h3 class="event-title">${title}</h3>
                      </div>
                    </a>`;
  
  return event;
}
