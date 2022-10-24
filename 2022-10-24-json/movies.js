fetch('./movies.json')
  .then(response => response.json())
  .then(movies => {
    let moviesList = document.querySelector('#movies-list');

    movies.map(movie => {
      let movieItem = document.createElement('div');
      movieItem.classList.add('movie-item');

      let titleElement = document.createElement('h2');
      titleElement.textContent = `${movie.name} (${movie.releaseYear})`;

      let rankingElement = document.createElement('span');
      rankingElement.textContent = `Ranking: ${movie.review.ranking} (${movie.review.count})`;

      let descriptionElement = document.createElement('p');
      descriptionElement.textContent = movie.description;

      let genresWrapper = document.createElement('div');
      genresWrapper.classList.add('genres-wrapper');

      let genresTitleElement = document.createElement('h3');
      genresTitleElement.textContent = 'Genres:';

      let genresListElement = document.createElement('ul');

      genresWrapper.append(genresTitleElement, genresListElement);

      movie.genres.map(genre => {
        let genreItem = document.createElement('li');
        genreItem.textContent = genre;
        genresListElement.append(genreItem);
      })

      let actorsWrapper = document.createElement('div');
      actorsWrapper.classList.add('actors-wrapper');

      let actorsTitleElement = document.createElement('h3');
      actorsTitleElement.textContent = 'Actors:';

      let actorsListElement = document.createElement('ul');

      actorsWrapper.append(actorsTitleElement, actorsListElement);

      movie.cast.map(actor => {
        let actorItem = document.createElement('li');
        actorItem.textContent = actor;
        actorsListElement.append(actorItem);
      })


      let directorsWrapper = document.createElement('div');
      directorsWrapper.classList.add('directors-wrapper');

      let directorsTitleElement = document.createElement('h3');
      directorsTitleElement.textContent = 'Directors:';

      let directorsListElement = document.createElement('ul');

      directorsWrapper.append(directorsTitleElement, directorsListElement);

      movie.directors.map(director => {
        let directorItem = document.createElement('li');
        directorItem.textContent = director;
        directorsListElement.append(directorItem);
      })

      movieItem.append(titleElement, rankingElement, descriptionElement, genresWrapper, actorsWrapper, directorsWrapper);
      moviesList.append(movieItem);
    })
  })