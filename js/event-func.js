$(function () {

    /**
     * Menu Click Event
     */
    const sections = $("#home, .wrap-info .info-area");
    const wrapInfo = $("#home, .wrap-info");
    const infoAreaBlockList = $(".info-area > .info-area-block");
    const stepProjectList = $(".step-project-content");
    const stepProjectPictureList = $('.step-project-content-picture');
    const stepProjectDetailList = $('.step-project-content-detail');

    let currentIndex = 0;
    let isScrolling = false;
    let scrollEnabled = true;

    /**
     * Smooth Scroll
     */
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
    });

    $('ul.toc > li > a').click(function (e) {

        const $menuList = $('ul.toc > li');
        const $anchor = $(this);

        $.each($menuList, function (idx, item) {
            const $item = $(item);
            if ($item.hasClass('active')) {
                $item.removeClass('active');
            }
        });

        //Click a > li class Setting
        if (!$anchor.parent().hasClass('active')) {
            $anchor.parent().addClass('active');
        }

        //index Setting
        currentIndex = $(this).data('idx');

    });

    function activeSetting(index) {
        const $menuList = $('ul.toc > li');

        //Active Setting
        $.each($menuList, function (idx, item) {
            const $item = $(item);
            if ($item.hasClass('active')) {
                $item.removeClass('active');
            }
        });

        //Click a > li class Setting
        const toc = ['#toc-home', '#toc-skills', '#toc-experience', '#toc-projects', '#toc-reference'];

        if (!$(toc[index]).hasClass('active')) {
            $(toc[index]).addClass('active');
        }
    }


    // Scroll 설정 [PC에서만 동작]
    if (/Android|iPhone/i.test(navigator.userAgent) === false) {

        function scrollToSection(index) {
            if (index >= sections.length || isScrolling) return;

            isScrolling = true;

            const offsetTop = $(sections[index]).offset()?.top;
            $("html, body").animate({scrollTop: offsetTop}, 800);

            activeSetting(index);

            setTimeout(() => {
                currentIndex = index;
                isScrolling = false;
            }, 800); // 스크롤 완료 후 대기
        }


        $.each(infoAreaBlockList, function (idx, infoAreaBlock) {
            $(infoAreaBlock).on("mousewheel DOMMouseScroll", function (event) {
                const target = event.currentTarget;
                // Scroll이 최상단이 아닐 때, Scroll을 위로 굴렷거나 / 아래로 굴렸을 때, 스크롤 최대치가 아니면 아래 wheel event 취소.
                if ((event.originalEvent.deltaY < 0 && target.scrollTop > 0) || event.originalEvent.deltaY > 0 && target.clientHeight + target.scrollTop < target.scrollHeight) {
                    scrollEnabled = false;
                }
            })

            // 터치 이벤트 (모바일)
            let startY = 0;
            let isEnd = false;
            let isStart = false;
            $(infoAreaBlock).on("touchstart", function (event) {
                startY = event.touches[0].clientY;
                const target = event.currentTarget;
                isStart = target.scrollTop > 0;
                isEnd = (target.clientHeight + target.scrollTop < target.scrollHeight);
            });

            $(infoAreaBlock).on("touchend", function (event) {
                let endY = event.changedTouches[0].clientY;
                let deltaY = startY - endY;

                // Scroll이 최상단이 아닐 때, Scroll을 위로 굴렷거나 / 아래로 굴렸을 때, 스크롤 최대치가 아니면 아래 wheel event 취소.
                if ((deltaY < 0 && isStart) || (deltaY > 0 && isEnd)) {
                    scrollEnabled = false;
                }
            });
        });

        $.each(stepProjectPictureList, function (idx, stepProjectPicture) {
            $(stepProjectPicture).on("mousewheel DOMMouseScroll", function (event) {
                const target = event.currentTarget;
                if ((event.originalEvent.deltaY < 0 && target.scrollTop > 0) || event.originalEvent.deltaY > 0 && target.clientHeight + target.scrollTop < target.scrollHeight - 1) {
                    scrollEnabled = false;
                }
            })

            // 터치 이벤트 (모바일)
            let startY = 0;
            let isEnd = false;
            let isStart = false;

            $(stepProjectPicture).on("touchstart", function (event) {
                startY = event.touches[0].clientY;
                const target = event.currentTarget;
                isStart = target.scrollTop > 0;
                isEnd = (target.clientHeight + target.scrollTop < target.scrollHeight);
            });

            $(stepProjectPicture).on("touchend", function (event) {
                let endY = event.changedTouches[0].clientY;
                let deltaY = startY - endY;

                // Scroll이 최상단이 아닐 때, Scroll을 위로 굴렷거나 / 아래로 굴렸을 때, 스크롤 최대치가 아니면 아래 wheel event 취소.
                if ((deltaY < 0 && isStart) || (deltaY > 0 && isEnd)) {
                    scrollEnabled = false;
                }
            });
        })

        $.each(stepProjectDetailList, function (idx, stepProjectDetail) {
            $(stepProjectDetail).on("mousewheel DOMMouseScroll", function (event) {
                const target = event.currentTarget;
                if ((event.originalEvent.deltaY < 0 && target.scrollTop > 0) || event.originalEvent.deltaY > 0 && target.clientHeight + target.scrollTop < target.scrollHeight - 1) {
                    scrollEnabled = false;
                }
            })

            // 터치 이벤트 (모바일)
            let startY = 0;
            let isEnd = false;
            let isStart = false;

            $(stepProjectDetail).on("touchstart", function (event) {
                startY = event.touches[0].clientY;
                const target = event.currentTarget;
                isStart = target.scrollTop > 0;
                isEnd = (target.clientHeight + target.scrollTop < target.scrollHeight);
            });

            $(stepProjectDetail).on("touchend", function (event) {
                let endY = event.changedTouches[0].clientY;
                let deltaY = startY - endY;

                // Scroll이 최상단이 아닐 때, Scroll을 위로 굴렷거나 / 아래로 굴렸을 때, 스크롤 최대치가 아니면 아래 wheel event 취소.
                if ((deltaY < 0 && isStart) || (deltaY > 0 && isEnd)) {
                    scrollEnabled = false;
                }
            });
        })

        $.each(stepProjectList, function (idx, stepProject) {
            $(stepProject).on("mousewheel DOMMouseScroll", function (event) {
                const target = event.currentTarget;
                if ((event.originalEvent.deltaY < 0 && target.scrollTop > 0) || event.originalEvent.deltaY > 0 && target.clientHeight + target.scrollTop < target.scrollHeight) {
                    scrollEnabled = false;
                }
            })

            // 터치 이벤트 (모바일)
            let startY = 0;
            let isEnd = false;
            let isStart = false;

            $(stepProject).on("touchstart", function (event) {
                startY = event.touches[0].clientY;
                const target = event.currentTarget;
                isStart = target.scrollTop > 0;
                isEnd = (target.clientHeight + target.scrollTop < target.scrollHeight);
            });

            $(stepProject).on("touchend", function (event) {
                let endY = event.changedTouches[0].clientY;
                let deltaY = startY - endY;

                // Scroll이 최상단이 아닐 때, Scroll을 위로 굴렷거나 / 아래로 굴렸을 때, 스크롤 최대치가 아니면 아래 wheel event 취소.
                if ((deltaY < 0 && isStart) || (deltaY > 0 && isEnd)) {
                    scrollEnabled = false;
                }
            });
        })


        // 마우스 휠 이벤트 (데스크탑)
        wrapInfo.on("mousewheel DOMMouseScroll", function (event) {
            if (isScrolling || !scrollEnabled) {
                scrollEnabled = true;
                return;
            }

            if (event.originalEvent.deltaY > 0) {
                scrollToSection(currentIndex + 1);
            } else if (event.originalEvent.deltaY < 0) {
                scrollToSection(currentIndex - 1);
            }
        });

        // 터치 이벤트 (모바일)
        let startY = 0;
        wrapInfo.on("touchstart", function (event) {
            startY = event.touches[0].clientY;
        });

        wrapInfo.on("touchend", function (event) {
            let endY = event.changedTouches[0].clientY;
            let deltaY = startY - endY;

            let moveHeight = (event.view.screen.height / 3) * 2

            if (deltaY > moveHeight) {
                scrollToSection(currentIndex + 1); // 아래로 스크롤
            } else if (deltaY < -moveHeight) {
                scrollToSection(currentIndex - 1); // 위로 스크롤
            } else {
                scrollToSection(currentIndex); // 제자리로 이동
            }
        });

        // 최초 지점 이동
        setTimeout(function () {
            scrollToSection(currentIndex)
        }, 500);

    } else { //Mobile 환경

        //스크롤 위치에 따라서 anchor 태그 active 변경
        $(document).on("scroll", throttle(function (e) {
            const scroll = document.documentElement.scrollTop;
            $.each(sections, function (idx, section) {
                if (($(section).offset().top - $(section).height()/2) <= scroll && scroll < ($(section).offset().top + $(section).height()/2)) {
                    activeSetting(idx);
                }
            });
        }, 200))
    }

    function throttle(func, delay) {
        let timer;
        return function() {
            const args = arguments;
            clearTimeout(timer);
            timer = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        }
    }

    $('img').click(function ({target}) {
        if(target.className !== 'logo') {
            originPicture(target);
        }
    })

    function originPicture(target) {

        Swal.fire({
            html: `<img src="${target.src}" alt=""/>`,
            showConfirmButton: false,
            showCloseButton: true,
            width: target.naturalWidth + 100,
            showClass: {popup: `animate__animated animate__zoomIn animate__faster`},
            hideClass: {popup: `animate__animated animate__zoomOut animate__faster`}
        })
    }


    $(".level-bar").click(function(e) {
        const name = $(this).data('name');
        const container = $($(this).siblings().get(0));
        dialogDiv(name, container);
    })

});