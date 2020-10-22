import './styles.css';
import menuData from './menu.json';
import menuItemsTpl from './templates/menu-items.hbs';

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
let themeStatus = '';
const ref = {
    menu: document.querySelector('.js-menu'),
    switcher: document.querySelector('#theme-switch-toggle'),
    body: document.querySelector('body')
};

themeStatus = localStorage.getItem('themeStatus') || 'light-theme';

if (themeStatus === Theme.DARK) {
    ref.body.classList.replace(Theme.LIGHT, Theme.DARK);
    ref.switcher.checked = true;
}

ref.menu.insertAdjacentHTML('beforeend', menuItemsTpl(menuData));
ref.switcher.addEventListener('change', onSwitchTheme);

function onSwitchTheme(evt) {
    if (evt.target.checked) {
        ref.body.classList.replace (Theme.LIGHT,Theme.DARK)
    }
    else {
        ref.body.classList.replace (Theme.DARK,Theme.LIGHT)
    }
  
    localStorage.setItem('themeStatus', ref.body.classList)
    
};