const LIGHT = 'light';
const DARK = 'dark';
const body = document.querySelector('body');
const initialTheme = LIGHT;

const setTheme = (theme) => {
    localStorage.setItem('theme', theme);
    body.setAttribute('data-theme', theme);
}
const toogleTheme = () => {
    const activeTheme = localStorage.getItem('theme');

    if (activeTheme === LIGHT) {
        setTheme(DARK);
    } else {
        setTheme(LIGHT);
    }
}

const setThemOnInit = () => {
    const savedTheme = localStorage.getItem('theme');
    savedTheme ? body.setAttribute('data-theme', savedTheme) : setTheme(initialTheme);
}

setThemOnInit();