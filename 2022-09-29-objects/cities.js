// 1. Sukurti masyvą, kuriame būtų 10 skirtingų miestų. Kiekvienas miestas turi būti objekto tipo ir turi turėti šiuos properties:
//  1.1. name - miesto pavadinimas
//  1.2. population - miesto populiacija
//  1.3. location - objektas
//    1.3.1. continent - žemynas
//    1.3.2. country - šalis
//  1.4. touristAttractions (lankytinos vietos) masyvą
//  1.5. isCapital - boolean reikšmė nurodanti ar miestas yra sostinė

let citiesData = [
{
  name: 'London',
  population: 11120000,
  location: {
    continent: 'Europe',
    country: 'United Kingdom',
  },
  touristAttractions: ['Big Ben'],
  isCapital: true
},
{
  name: 'Paris',
  population: 11027000,
  location: {
    continent: 'Europe',
    country: 'France',
  },
  touristAttractions: [],
  isCapital: true
},
{
  name: 'New York',
  population: 19294000,
  location: {
    continent: 'North America',
    country: 'United States of America',
  },
  touristAttractions: ['Metropolitan Museum', 'Central Park', 'Modern Art Museum'],
  isCapital: false
},
{
  name: 'Moscow',
  population: 17693000,
  location: {
    continent: 'Europe and Asia',
    country: 'Russia',
  },
  touristAttractions: [`St. Basil's Cathedral`, 'Moscow Kremlin', 'Red Square'],
  isCapital: true
},
{
  name: 'Dubai',
  population: 6595000,
  location: {
    continent: 'Asia',
    country: 'United Arab Emirates',
  },
  touristAttractions: ['Burj Khalifa', 'Burj Al Arab', 'Dubai Mall'],
  isCapital: false
},
{
  name: 'Tokyo',
  population: 39105000,
  location: {
    continent: 'Asia',
    country: 'Japan',
  },
  touristAttractions: ['Senso-ji', 'Tokyo Skytree', 'Meiji Jingu'],
  isCapital: true
},
{
  name: 'Singapore',
  population: 5901000,
  location: {
    continent: 'Asia',
    country: 'Singapore',
  },
  touristAttractions: ['Marina Bay Sands', 'Gardens by the Bay', 'Sentosa'],
  isCapital: true
},
{
  name: 'Los Angeles',
  population: 13250000,
  location: {
    continent: 'North America',
    country: 'United States of America',
  },
  touristAttractions: ['Museum of Art', 'Disneyland Park', 'Santa Monica Pie'],
  isCapital: false
},
{
  name: 'Barcelona',
  population: 4735000,
  location: {
    continent: 'Europe',
    country: 'Spain',
  },
  touristAttractions: ['La Sagrada Familia', 'Park Guell', 'Casa Batllo', 'Test'],
  isCapital: false
},
{
  name: 'Rio de Janeiro',
  population: 6748000,
  location: {
    continent: 'South America',
    country: 'Brazil',
  },
  touristAttractions: ['Christ the Redeemer', 'Sugaloaf Mountain', 'Copacabana Beach', 'test', 'test', 'test'],
  isCapital: false
},
];

function renderCities(cities) {
  console.log(cities);

  // cities.map((city) => {
  //   console.log(city);
  //   console.log(city.name);
  //   console.log(city['name']);
    
  //   console.log(city.population);
  //   console.log(city['population']);
    
  //   console.log(city.location);
  //   console.log(city['location']);
  //   console.log(city.location.continent);
  //   console.log(city['location']['continent']);
  //   console.log(city.location.country);
  //   console.log(city['location']['country']);

  //   console.log(city.touristAttractions);
  //   console.log(city['touristAttractions']);

  //   city.touristAttractions.map((attraction) => {
  //     console.log(attraction);
  //   });

  //   console.log(city.isCapital);
  //   console.log(city['isCapital']);
  // });

  // for (let i = 0; i < cities.length; i++) {
  //   console.log(cities[i]);
  //   console.log(cities[i].name);
  //   console.log(cities[i].population);
  //   console.log(cities[i].location.continent);
  //   console.log(cities[i].location.country);
  //   console.log(cities[i].touristAttractions);

  //   for (let j = 0; j < cities[i].touristAttractions.length; j++) {
  //     console.log(cities[i].touristAttractions[j]);
  //   }

  //   console.log(cities[i].isCapital);
  // }

  let citiesWrapper = document.querySelector('#cities-wrapper');

  cities.map((city) => {
    console.log(city.name);
    // console.log(city.population);
    // console.log(city.location);
    // console.log(city.location.continent);
    // console.log(city.location.country);
    // console.log(city.isCapital);

    // 3.1. Jeigu miestas yra sostinė, tai:
    // 3.1.1. Prie miesto pavadinimo pridėti žodį capital, pvz.: Vilnius (capital)
    // 3.1.2. Prie miesto aprašymo pridėti tekstą, kuris nusako jog tai šalies sostinė, pvz.: „Vilnius is the capital of Lithuania."

    // let name = city.name;
    // let population = city.population;
    // let isCapital = city.isCapital;
    // let touristAttractions = city.touristAttractions;

    let {name, population, isCapital, touristAttractions} = city;

    // let country = city.location.country;
    // let continent = city.location.continent;

    let {country, continent} = city.location;

    let capitalTitle = '';
    let capitalText = '';
    let capitalClass = '';

    if (isCapital) {
      capitalTitle = ' (capital)';
      capitalText = ` ${name} is the capital of ${country}.`;
      capitalClass = ' capital';
    }

//  4. Priklausomai nuo miesto lankytinų objektų kiekio, tekstas turi skirtis:
//  4.1. Jeigu lankytina vieta tik viena, tai turėtų būti naudojama vienaskaita, pvz.: „Main Tourist attraction of Vilnius is".
//  4.2. Jeigu lankytinų vietų yra daugiau, nei viena, tai tekstas turėtų būti daugiskaitoje, pvz. „Main Tourist attractions of Kaunas are".
//  4.3. Jeigu lankytinų vietų nėra, tai tekstas neturėtų būti atvaizduojamas.

    let touristAttractionText = '';

    if (touristAttractions.length > 0) {
      let touristAttractionsTitle = '';
      let touristAttractionsWrapper = '';

      if (touristAttractions.length === 1) {
        touristAttractionsTitle = `<h3>Main Tourist attraction of ${name} is:</h3>`;
      } else {
        touristAttractionsTitle = `<h3>Main Tourist attractions of ${name} are:</h3>`;
      }

      let touristAttractionsList = '';

      touristAttractions.map((attraction) => {
        touristAttractionsList += '<li>' + attraction + '</li>';
      });

      touristAttractionsWrapper = `<ul>${touristAttractionsList}</ul>`;

      touristAttractionText = touristAttractionsTitle + touristAttractionsWrapper;
    }

    let cityItem = `<div class="city-item${capitalClass}">
                      <h2 class="city-name">${name}${capitalTitle}</h2>
                      <p>${name} city is located in ${continent}, ${country} and has population of ${population} people.${capitalText}</p>
                      ${touristAttractionText}
                    </div>`;

    citiesWrapper.innerHTML += cityItem;

  });
}

renderCities(citiesData);


// 5. Naudojant tik JavaScript:
//  5.1. Pakeisti visų sostinių teksto spalvą.

function task51() {
  let capitalTitles = document.querySelectorAll('.capital .city-name');
  console.log(capitalTitles);
  
  capitalTitles.forEach(title => {
    console.log(title);
    title.style.color = 'green';
  });
}

task51();

//  5.2. Pakeisti kas antro miesto fono spalvą.
// function task52() {
//   let allCities = document.querySelectorAll('.city-item');
//   console.log(allCities);

  // for (let i = 0; i < allCities.length; i++) {
  //   if (i % 2 !== 0) {
  //     allCities[i].style.backgroundColor = '#bbb';
  //   }
  // }

  // for (let i = 0; i < allCities.length; i+=2) {
  //   allCities[i].style.backgroundColor = '#bbb';
  // }

  // allCities.forEach((city, index) => {
  //   console.log(index, city);

  //   if (index % 2 !== 0) {
  //     city.style.backgroundColor = '#bbb';
  //   }
  // });
// }

function task52() {
  let evenCities = document.querySelectorAll('.city-item:nth-child(even)');
  console.log(evenCities);

  // for (let i = 0; i < evenCities.length; i++) {
  //   console.log(evenCities[i]);
  //   evenCities[i].style.backgroundColor = '#bbb';
  // }

  evenCities.forEach((city) => {
    console.log(city);
    city.style.backgroundColor = '#bbb';
  });
}

task52();


//  5.3. Pakeisti visų lankytinų vietų sąrašo pirmo nario spalvą į žalią.
//  5.4. Pakeisti visų lankytinų vietų sąrašo paskutinių narių spalvą į raudoną, jeigu narių (lankytinų vietų) yra daugiau nei 3.

function task53() {
  // let firstLiItems = document.querySelectorAll('li:first-child');
  // console.log(firstLiItems);

  // firstLiItems.forEach((item) => {
  //   console.log(item);
  //   item.style.color = 'green';
  // });

  // let lastLiItems = document.querySelectorAll('li:nth-of-type(1n+4)');
  // console.log(lastLiItems);

  // lastLiItems.forEach(item => item.style.color = 'red');

  let allUlElements = document.querySelectorAll('.city-item ul');
  console.log(allUlElements);

  allUlElements.forEach(ulElement => {
    console.log(ulElement);

    let liElements = ulElement.querySelectorAll('li');
    console.log(liElements);

    liElements.forEach((liElement, index) => {
      console.log(index, liElement.textContent);
      let color = '';
      if (index === 0) {
        color = 'green';
      } else if (index > 2) {
        color = 'red';
      } else {
        color = 'blue';
      }
      liElement.style.color = color;
    });
  });
}

task53();


// 6. Jeigu miestų skaičius nėra porinis, tai paskutinio miesto plotis turi būti 100%, o visų kitų - 50%.
function task6() {
  let citiesWrapper = document.querySelector('#cities-wrapper');
  // citiesWrapper.style.display = 'flex';
  // citiesWrapper.style.flexWrap = 'wrap';
  // citiesWrapper.style.justifyContent = 'space-between';
  // citiesWrapper.style.rowGap = '30px';
  citiesWrapper.style = `display: flex;
                         flex-wrap: wrap;
                         justify-content: space-between;
                         row-gap: 30px;`;

  let allCities = document.querySelectorAll('.city-item');
  // console.log(allCities);

  allCities.forEach((city, index) => {
    // console.log(index, city);
    city.style.width = '48%';

    if (allCities.length - 1 === index) {
      if (index % 2 === 0) {
        city.style.width = '100%';
      }
    }
  })
}

task6();