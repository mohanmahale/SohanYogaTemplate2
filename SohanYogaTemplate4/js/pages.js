$(window).load(function () {
    var act = '';

    $('#content > ul > li').css({ position: 'absolute', display: 'none' });
    $('#content > ul > li').find('.box1').css({ height: '0' })

    $('#menu > li > a span').css({ opacity: '0' })

    $('#menu > li > a').hover(function () {
        $(this).find(' > span').stop().animate({ opacity: '1' }, 600);
    }, function () {
        if (!$(this).hasClass('active')) {
            $(this).find(' > span').stop().animate({ opacity: '0' }, 600);
        }
    })

    $('#menu > li').each(function (num) {
        $(this).data({ num: num })
    })
    if (location.hash.slice(0, 3) == '#!/') {
        page = location.hash.slice(3);
        open_page('#' + page);
    }
    if ((location.hash == '#') || (location.hash == '')) {
        open_page('');
    }
    $('#menu a').click(function () {
        $('#menu a').removeClass('active').find(' > span').stop().animate({ opacity: '0' }, 600);
        Cufon.replace('#menu a', { fontFamily: 'Questrial', hover: true });
        $(this).addClass('active').find(' > span').stop().animate({ opacity: '1' }, 600);
    })
    $('a').click(function () {
        if ($(this).attr('href').slice(0, 3) == '#!/') {
            page = $(this).attr('href').slice(3);
            open_page('#' + page);
            return false;
        }
        if ($(this).attr('data-type') == 'close') {
            close_page()
        }
    })
    function open_page(page) {
        location.hash = '#!/' + page.slice(1);
        if (act != '') {
            $(act).find('.box1').stop().animate({ height: '0' }, 700, 'easeOutCirc', function () {
                $(act).css({ display: 'none' });
                $(page).css({ display: 'block' }).find('.box1').stop().animate({ height: '100%' }, 700, 'easeOutCirc', function () {
                    act = page;
                });
            })
        } else {
            $(page).css({ display: 'block' }).find('.box1').stop().animate({ height: '100%' }, 700, 'easeOutCirc', function () {
                act = page;
            });
        }
    }
    
})