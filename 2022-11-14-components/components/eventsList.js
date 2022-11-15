import eventItem from "./event.js";

export default function eventsList() {
  const eventsWrapper = document.createElement('div');
  eventsWrapper.classList.add('events-wrapper');

  const eventsData = [
    {
      title: 'TestCon Europe 2022',
      day: 27,
      month: 'spa',
      location: 'Online',
      image: '../assets/images/event-image.png',
      url: '#'
    },
    {
      title: 'TestCon Europe 2022',
      day: 27,
      month: 'spa',
      location: 'Online',
      url: '#'
    },
    {
      title: 'TestCon Europe 2022',
      day: 27,
      month: 'spa',
      location: 'Online',
      url: '#'
    }
  ];

  eventsData.map(eventData => {
    eventsWrapper.append(eventItem(eventData));
  })

  return eventsWrapper;
}