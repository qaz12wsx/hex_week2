$(document).ready(function () {
    $('.menu-list').on('click', function (e) {
        e.preventDefault();
        $('.header .mobile-menu-list').toggleClass('showdmenu');
    });
});
