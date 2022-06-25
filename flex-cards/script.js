function changeWidth(width) {
    let r = document.querySelector(':root');
    r.style.setProperty('--main-panel-width', `${width}%`);
}