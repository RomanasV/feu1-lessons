export default function largeButton() {
  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('all-events', 'button-wrapper');

  buttonWrapper.innerHTML = `<a href="#" class="all-events-link button-title">Daugiaus
                              <svg xmlns='http://www.w3.org/2000/svg' width='19' height='33'>
                                <path d='M2.535 32.526L.033 30.024l13.76-13.761L.034 2.502 2.535-.001 18.8 16.263z' fill-rule='evenodd' />
                              </svg>
                            </a>`;

  return buttonWrapper;
}
