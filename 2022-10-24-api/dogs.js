function init() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      let allBreeds = data.message;
      let selectElement = document.querySelector('#dogs-select');

      // let breedKeys = Object.keys(allBreeds);
      // let breedValues = Object.values(allBreeds);
      // let breedEntries = Object.entries(allBreeds);

      // console.log(breedKeys);
      // console.log(breedValues);
      // console.log(breedEntries);

      // breedKeys.map(key => {
      //   console.log(key);
      // })
      
      // breedValues.map(value => {
      //   console.log(value);
      // })

      // breedKeys.map((key, index) => {
      //   console.log(key);
      //   console.log(breedValues[index]);
      // })

      // breedEntries.map(entry => {
      //   console.log(entry);
      //   console.log(entry[0]);
      //   console.log(entry[1]);
      // })

      for (key in allBreeds) {
        let mainBreed = key;
        let subBreeds = allBreeds[key];

        console.log(subBreeds);
        console.log(subBreeds.length);

        if (subBreeds.length > 0) {
          console.log('turi sub veisles'); 
        } else {
          console.log('neturi sub veisliu');
        }

        let optionElement = document.createElement('option');
        optionElement.textContent = '- ' + mainBreed;
        optionElement.value = mainBreed;
        selectElement.append(optionElement);
      }
    })

  const dogsForm = document.querySelector('#dogs-form');
  const imageWrapper = document.querySelector('#image-wrapper');

  dogsForm.addEventListener('submit', (event) => {
    event.preventDefault();
    let selectedBreed = event.target.elements['dogs-select'].value;
    
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random`)
      .then(res => res.json())
      .then(data => {
        let imageUrl = data.message;
        let imageElement = document.createElement('img');
        imageElement.src = imageUrl;

        imageWrapper.innerHTML = '';
        imageWrapper.append(imageElement)
      })
  })
}

init();