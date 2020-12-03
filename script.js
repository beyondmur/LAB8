function buttonSet(selector) {
    let menu = $(selector);
    let button = menu.find('.button');
    let links = menu.find('.link');
    let overlay = menu.find('.menu_overlay');

    button.on('click', (e) => {
        e.preventDefault();
        toggleMenu();
    });

    links.on('click', () => toggleMenu());
    overlay.on('click', () => toggleMenu());

    function toggleMenu() {
        menu.toggleClass('button_active');
        if (menu.hasClass('button_active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    }
}

buttonSet ('.button_set');

