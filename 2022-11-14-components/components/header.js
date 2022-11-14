export default function header() {
  const headerElement = document.createElement('div');
  headerElement.classList.add('header');

  const logo = document.createElement('img');
  logo.src = 'https://codeacademy.lt/wp-content/themes/codeacademy/dist/images/codeacademy-black.svg';

  const navigation = document.createElement('nav');
  navigation.classList.add('main-navigation');

  const mainMenu = document.createElement('ul');
  mainMenu.classList.add('main-menu');

  // const menuItemsArr = ['Studentams', 'Verslui', 'Programoms'];

  // menuItemsArr.map(item => {
  //   const menuItem = document.createElement('li');
  //   menuItem.classList.add('menu-item');
  //   menuItem.innerHTML = `<a href="#">${item}</a>`;

  //   mainMenu.append(menuItem);
  // })

  mainMenu.innerHTML = `<li class="menu-item"><a href="#">Studentams</a></li>
                        <li class="menu-item"><a href="#">Verslui</a></li>
                        <li class="menu-item"><a href="#">Programos</a></li>
                        <li class="menu-item"><a href="#">Apie mus</a></li>
                        <li class="menu-item"><a href="#">Naujienos</a></li>
                        <li class="menu-item"><a href="#">IT testas</a></li>
                        <li class="menu-item"><a href="#">Kontaktai</a></li>
                        <li class="menu-item"><a href="#">EN</a></li>`;

  navigation.append(mainMenu);
  headerElement.append(logo, navigation);
  return headerElement;
}