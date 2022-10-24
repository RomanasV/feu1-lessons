let h1 = document.querySelector('h1');
let h2 = document.querySelector('h2');
let h3 = document.querySelector('h3');
let h4 = document.querySelector('h4');
let h5 = document.querySelector('h5');
let button = document.querySelector('button');
let body = document.body;

h1.addEventListener('click', () => {
  h1.style.color = 'green';
  h1.style.backgroundColor = 'pink';
  h1.textContent = 'Clicked';
});

h2.addEventListener('click', () => {
  h2.style.fontSize = '50px';
});

h3.addEventListener('click', () => {
  h3.style.color = 'purple';
  h1.style.color = 'purple';
});

// h4.addEventListener('click', () => {
//   h2.style.border = '2px solid red';
//   h5.style.border = '3px solid green';
// });

// h5.addEventListener('click', () => {
//   h2.style.border = '2px solid red';
//   h5.style.border = '3px solid green';
// });

h4.addEventListener('click', changeHeaderBorder);
h5.addEventListener('click', changeHeaderBorder);

function changeHeaderBorder() {
  h2.style.border = '2px solid red';
  h5.style.border = '3px solid green';
  h2.style.fontSize = '5px';
}


// body.addEventListener('click', () => {
//   body.style.backgroundColor = '#bbb';
// })

button.addEventListener('click', () => {
  button.classList.toggle('active');

  if (button.classList.contains('active')) {
    body.style.backgroundColor = '#bbb';
  } else {
    body.style.backgroundColor = 'unset';
  }
})