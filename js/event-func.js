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

    /**
     * Menu Click Event
     */
    $('ul.toc > li > a').click(function(e) {

        const $menuList = $('ul.toc > li');
        const $anchor = $(this);

        $.each($menuList, function (idx, item) {
            const $item = $(item);
           if($item.hasClass('active')) {
               $item.removeClass('active');
           }
        });

        //Click a > li class Setting
        if(!$anchor.parent().hasClass('active')) {
            $anchor.parent().addClass('active');
        }

    });

    const sections = document.querySelectorAll(".wrap-info .info-area");
    const wrapInfo = document.querySelector(".wrap-info");
    let currentIndex = 0;
    let isScrolling = false;

    function scrollToSection(index) {
        console.log(index);
        if (index < 0 || index >= sections.length || isScrolling) return;

        isScrolling = true;
        sections[index].scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
            currentIndex = index;
            isScrolling = false;
        }, 800); // 스크롤 완료 후 대기
    }

    // 마우스 휠 이벤트 (데스크탑)
    wrapInfo.addEventListener("wheel", function (event) {
        if (isScrolling) return;

        if (event.deltaY > 0) {
            scrollToSection(currentIndex + 1);
        } else if (event.deltaY < 0) {
            scrollToSection(currentIndex - 1);
        }
    });

    // 터치 이벤트 (모바일)
    let startY = 0;
    wrapInfo.addEventListener("touchstart", function (event) {
        startY = event.touches[0].clientY;
    });

    wrapInfo.addEventListener("touchend", function (event) {
        let endY = event.changedTouches[0].clientY;
        let deltaY = startY - endY;

        if (deltaY > 50) {
            scrollToSection(currentIndex + 1); // 아래로 스크롤
        } else if (deltaY < -50) {
            scrollToSection(currentIndex - 1); // 위로 스크롤
        }
    });

})