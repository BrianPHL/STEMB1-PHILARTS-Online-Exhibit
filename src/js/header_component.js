let portfolioDropdownBool = false;
let contributorsDropdownBool = false;
$(document).on('scroll', () => {
    (window.scrollY > 100)
        ? contractHeader()
        : expandHeader();
});
$('.nav-portfolio-link').on('click', function () {
    if (!portfolioDropdownBool) {
        $(this).find('.fa-angle-down').css({
            'transform': 'rotate(-180deg)'
        });
        portfolioDropdownBool = true;
        contractHeader();
    }
    else {
        $(this).find('.fa-angle-down').css({
            'transform': 'rotate(0deg)'
        });
        portfolioDropdownBool = false;
        if (window.scrollY <= 100) {
            expandHeader();
        }
    }
});
$('.nav-contributors-link').on('click', function () {
    if (!contributorsDropdownBool) {
        $(this).find('.fa-angle-down').css({
            'transform': 'rotate(-180deg)'
        });
        contributorsDropdownBool = true;
        contractHeader();
    }
    else {
        $(this).find('.fa-angle-down').css({
            'transform': 'rotate(0deg)'
        });
        contributorsDropdownBool = false;
        if (window.scrollY <= 100) {
            expandHeader();
        }
    }
});
const contractHeader = () => {
    $('header').css({
        'height': '80px',
        'background-color': 'black'
    });
    $('.heading').css({ 'height': '80px' });
    $('nav').css({ 'height': '80px' });
    $('.heading').find('.heading-text').css({ 'margin-left': '30px' });
    $('.nav-theme').css({ 'margin-left': '15px' });
    $('nav > div').css({ 'padding': '15px' });
    $('.heading-text').find('h1').css({ 'font-size': '1.2rem' });
    $('.heading-text').find('h2').css({ 'font-size': '0.65rem' });
};
const expandHeader = () => {
    if (portfolioDropdownBool || contributorsDropdownBool) {
        return;
    }
    $('header').css({
        'height': '100px',
        'background-color': 'transparent'
    });
    $('.heading').css({ 'height': '100px' });
    $('nav').css({ 'height': '100px' });
    $('.heading-text').css({ 'margin-left': '60px' });
    $('.nav-theme').css({ 'margin-left': '30px' });
    $('nav > div').css({ 'padding': '30px' });
    $('.heading-text').find('h1').css({ 'font-size': '1.4rem' });
    $('.heading-text').find('h2').css({ 'font-size': '0.7rem' });
};
