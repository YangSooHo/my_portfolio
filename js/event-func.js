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
    const home = document.querySelector("#home");
    const sections = document.querySelectorAll(".wrap-info .info-area");
    const wrapInfo = document.querySelector(".wrap-info");
    const infoAreaBlockList = document.querySelectorAll(".info-area > .info-area-block");
    const stepProjectList = document.querySelectorAll(".step-project");

    let currentIndex = 0;
    let isScrolling = false;

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

        //index Setting
        currentIndex = $(this).data('idx');

    });

    function activeSetting(index) {
        const $menuList = $('ul.toc > li');

        //Active Setting
        $.each($menuList, function (idx, item) {
            const $item = $(item);
            if($item.hasClass('active')) {
                $item.removeClass('active');
            }
        });

        //Click a > li class Setting
        const toc = ['#toc-skills', '#toc-experience', '#toc-projects', '#toc-reference'];

        if (index < 0 && !$('#toc-home').hasClass('active')) {
            $('#toc-home').addClass('active');
        } else if(!$(toc[index]).hasClass('active')) {
            $(toc[index]).addClass('active');
        }
    }

    function scrollToSection(index) {
        if (index >= sections.length || isScrolling) return;

        isScrolling = true;

        if (index < 0) { home.scrollIntoView({behavior: "smooth"}); }
        else { sections[index].scrollIntoView({ behavior: "smooth" }); }

        activeSetting(index);
        setTimeout(() => {
            currentIndex = index;
            isScrolling = false;
        }, 800); // 스크롤 완료 후 대기
    }


    infoAreaBlockList.forEach(function(infoAreaBlock){
        infoAreaBlock.addEventListener("wheel", function (event) {
            const target = event.currentTarget;
            // Scroll이 최상단이 아닐 때, Scroll을 위로 굴렷거나 / 아래로 굴렸을 때, 스크롤 최대치가 아니면 아래 wheel event 취소.
            if((event.deltaY < 0 && target.scrollTop > 0) || event.deltaY > 0 && target.clientHeight + target.scrollTop < target.scrollHeight) {
                event.stopPropagation();
            }
        })

        // 터치 이벤트 (모바일)
        let startY = 0;
        infoAreaBlock.addEventListener("touchstart", function (event) {
            startY = event.touches[0].clientY;
        });

        infoAreaBlock.addEventListener("touchend", function (event) {
            let endY = event.changedTouches[0].clientY;
            let deltaY = startY - endY;

            const target = event.currentTarget;
            // Scroll이 최상단이 아닐 때, Scroll을 위로 굴렷거나 / 아래로 굴렸을 때, 스크롤 최대치가 아니면 아래 wheel event 취소.
            if((deltaY < 0 && target.scrollTop > 0) || deltaY > 0 && target.clientHeight + target.scrollTop < target.scrollHeight) {
                event.stopPropagation();
            }
        });
    });

    stepProjectList.forEach(function(stepProject){
        stepProject.addEventListener("wheel", function (event) {
            const target = event.currentTarget;
            // Scroll이 최상단이 아닐 때, Scroll을 위로 굴렷거나 / 아래로 굴렸을 때, 스크롤 최대치가 아니면 아래 wheel event 취소.
            if((event.deltaY < 0 && target.scrollTop > 0) || event.deltaY > 0 && target.clientHeight + target.scrollTop < target.scrollHeight) {
                event.stopPropagation();
            }
        })

        // 터치 이벤트 (모바일)
        let startY = 0;
        stepProject.addEventListener("touchstart", function (event) {
            startY = event.touches[0].clientY;
        });

        stepProject.addEventListener("touchend", function (event) {
            let endY = event.changedTouches[0].clientY;
            let deltaY = startY - endY;

            const target = event.currentTarget;
            // Scroll이 최상단이 아닐 때, Scroll을 위로 굴렷거나 / 아래로 굴렸을 때, 스크롤 최대치가 아니면 아래 wheel event 취소.
            if((deltaY < 0 && target.scrollTop > 0) || deltaY > 0 && target.clientHeight + target.scrollTop < target.scrollHeight) {
                event.stopPropagation();
            }
        });
    })


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


    //Wizard Event
    let currentStep = 0;
    const steps = document.querySelectorAll(".step");
    const totalSteps = steps.length;
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const firstBtn = document.getElementById("firstBtn");
    const lastBtn = document.getElementById("lastBtn");

    function updateSteps() {
        steps.forEach((step, index) => {
            step.classList.remove("active", "hidden-left", "hidden-right");

            if (index < currentStep) {
                step.classList.add("hidden-left"); // 왼쪽으로 사라짐
            } else if (index === currentStep) {
                step.classList.add("active"); // 현재 페이지
            } else {
                step.classList.add("hidden-right"); // 오른쪽에서 등장
            }
        });

        prevBtn.disabled = currentStep === 0;
        firstBtn.disabled = currentStep === 0;
        nextBtn.disabled = currentStep === totalSteps - 1;
        lastBtn.disabled = currentStep === totalSteps - 1;
    }



    nextBtn.addEventListener("click", function () {
        if (currentStep < totalSteps - 1) {
            currentStep++;
            updateSteps();
        }
    });

    prevBtn.addEventListener("click", function () {
        if (currentStep > 0) {
            currentStep--;
            updateSteps();
        }
    });

    firstBtn.addEventListener("click", function () {
        if (currentStep > 0) {
            currentStep = 0;
            updateSteps();
        }
    });

    lastBtn.addEventListener("click", function () {
        if (currentStep < totalSteps - 1) {
            currentStep = totalSteps - 1;
            updateSteps();
        }
    });

    updateSteps(); // 초기 상태 설정

})