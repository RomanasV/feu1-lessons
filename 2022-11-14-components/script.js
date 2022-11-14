import header from './components/header.js';
import news from './components/news.js';

const root = document.querySelector('#root');

const headerElement = header();

const contentWrapper = document.createElement('div');
contentWrapper.classList.add('content-wrapper');

contentWrapper.append(news());


root.append(headerElement, contentWrapper);