$(function(){

    /**
     * Smooth Scroll
     */
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });

    $('ul.toc > li > a').click(function(e) {

        const $menuList = $('ul.toc > li');
        const $anchor = $(this);

        $.each($menuList, function (idx, item) {
            const $item = $(item);
           if($item.hasClass('active')) {
               $item.removeClass('active');
           }
           console.log($anchor.parent());

        });

    });
})