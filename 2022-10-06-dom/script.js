// Paselektinti HTML elementą
let paragraph = document.querySelector('p');
paragraph.textContent = 'Labas';
paragraph.innerHTML = 'Labas <span class="test" style="color: red;">rytas</span>';

// Sukurti HTML elementą
let spanElement = document.createElement('span');
spanElement.textContent = '!';

// Append - prideda su JS sukurtą HTML elementą (node) į kito elemento pabaigą
paragraph.append(spanElement);

// Prepend - prideda su JS sukurtą HTML elementą (node) į kito elemento pradžią
paragraph.prepend(spanElement);

// After - prideda su JS sukurtą HTML elementą (node) po kitu elementu (šalia kito elemento)
paragraph.after(spanElement);

// Before - prideda su JS sukurtą HTML elementą (node) prieš kitą elementą (šalia kito elemento)
paragraph.before(spanElement);

// Remove - pašalina HTML elementą iš DOM
spanElement.remove();

let newParagraph = document.createElement('p');
newParagraph.textContent = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore consequuntur enim laudantium voluptate culpa odio suscipit temporibus iure quos, non totam eligendi assumenda voluptatibus autem veniam optio architecto sunt fugiat?';

paragraph.after(newParagraph);

// Būdas pakeisti HTML elemento klases
newParagraph.className = 'pirma-klase antra-klase';
console.dir(newParagraph.className);

// newParagraph.className = 'trecia-klase';
// newParagraph.className = newParagraph.className + 'trecia-klase';
newParagraph.className += ' trecia-klase';

// Prideda klasę prie HTML elemento
// newParagraph.classList.add('ketvirta-klase');
newParagraph.classList.add('ketvirta-klase', 'penkta-klase');

// Pašalina klasę iš HTML elemento
// newParagraph.classList.remove('pirma-klase');
newParagraph.classList.remove('pirma-klase', 'trecia-klase', 'sesta-klase');

// Pakeičia klasę HTML elemente
newParagraph.classList.replace('antra-klase', 'antra-nauja-klase');

// Prideda klasę prie HTML elemento jeigu tokios klasės dar neturi ir pašalina jeigu tokią klasę turi
newParagraph.classList.toggle('toggle-klase');
newParagraph.classList.toggle('toggle-klase');
newParagraph.classList.toggle('toggle-klase');
newParagraph.classList.toggle('toggle-klase');

// Patikrina ar HTML elementas turi nurodytą klasę (grąžina true arba false)
console.log(newParagraph.classList.contains('penkta-klase'));
console.log(newParagraph.classList.contains('sesta-klase'));
console.log(newParagraph.classList.contains('toggle-klase'));

if (newParagraph.classList.contains('toggle-klase')) {
  document.body.style.backgroundColor = '#aaa';
}

// Keičia (arba prideda) HTML elemento ID
newParagraph.id = 'paragrafo-id';
console.log(newParagraph.id);

let link = document.createElement('a');
link.textContent = 'nuoroda';
newParagraph.after(link);

// link.href = 'https://google.com';
link.setAttribute('href', 'https://google.com');
link.setAttribute('target', '_blank');
link.setAttribute('title', 'Čia yra nuoroda');
link.setAttribute('class', 'nuorodos-klase');
link.setAttribute('class', 'antra-nuorodos-klase');

link.removeAttribute('class');

console.log(link.getAttribute('title'));
console.log(link.title);

console.dir(link.style);
link.style.border = '1px solid black';
link.style.padding = '5px 10px';
link.style.fontSize = '20px';

link.style = `background-color: green;
              color: white;
              font-weight: 700;
              display: inline-block;
              padding: 15px`;