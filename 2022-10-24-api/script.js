let randomJokeButton = document.querySelector('#random-joke');
let chuckJokeParagraph = document.querySelector('#chuck-joke');
let categorySelectElement = document.querySelector('#category');
let categoryForm = document.querySelector('#category-joke-form');

randomJokeButton.addEventListener('click', () => {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(res => res.json())
    .then(joke => {
      chuckJokeParagraph.textContent = joke.value;
    })
});

fetch('https://api.chucknorris.io/jokes/categories')
  .then(res => res.json())
  .then(categories => {
    categories.map(category => {
      let categoryOption = document.createElement('option');
      categoryOption.textContent = '---- ' + category + ' ----';
      categoryOption.value = category;

      categorySelectElement.append(categoryOption);
    })
  });

categoryForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let selectedValue = event.target.elements.category.value

  fetch(`https://api.chucknorris.io/jokes/random?category=${selectedValue}`)
    .then(res => res.json())
    .then(joke => {
      chuckJokeParagraph.textContent = joke.value;
    })
});