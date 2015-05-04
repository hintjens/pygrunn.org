jQuery(function($) {

    var fn = function(){},
        win = $(window),
        doc = $(document),
        fullscreenPos = $('.fullscreen'),
        offcanvasMenu = $('#offcanvasmenu'),
        offcanvasMenuLink = $('.uk-offcanvasmenu-bar li > a'),
        logo = $('.logo');

    fn = function(){

        setTimeout(function () { fullscreenPos.css('height', win.height()); }, 10);

    };

    win.on('load resize', (function () {

        fn();

        return fn;

    })());

    var hideOffCanvasMenu = function () {

        if (!offcanvasMenu.hasClass('uk-hidden')) {

            offcanvasMenu.addClass('uk-hidden');

        }

    };

    offcanvasMenuLink.on('click', function () {

        hideOffCanvasMenu();

    });

    logo.on('click', function () {

        hideOffCanvasMenu();

    });

    doc.on('ready', function () {

        $('.fancybox').fancybox({
            padding: 1,
            margin: 30
        });

    });

});
