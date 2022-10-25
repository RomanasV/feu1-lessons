function init() {
  fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
      let allBreeds = data.message;
      console.log(allBreeds);

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

        let optionElement = document.createElement('option');
        optionElement.textContent = mainBreed;
        optionElement.value = mainBreed;
        console.log(optionElement);

      }
    })
}

init();