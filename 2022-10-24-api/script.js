let randomJokeButton = document.querySelector('#random-joke');
let chuckJokeParagraph = document.querySelector('#chuck-joke');
let categorySelectElement = document.querySelector('#category');
let categoryForm = document.querySelector('#category-joke-form');
let searchForm = document.querySelector('#search-joke-form');

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

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  let searchInputValue = event.target.elements['search-input'].value;

  fetch(`https://api.chucknorris.io/jokes/search?query=${searchInputValue}`)
    .then(res => res.json())
    .then(data => {
      let jokes = data.result;
      let length = data.total;

      if (!jokes) {
        chuckJokeParagraph.textContent = data.message;
        return;
      }

      if (length < 1) {
        chuckJokeParagraph.textContent = 'No jokes found :(';
        return;
      }

      let randomIndex = Math.floor(Math.random() * length);
      let randomJoke = jokes[randomIndex].value;
      chuckJokeParagraph.textContent = randomJoke;
    })
});