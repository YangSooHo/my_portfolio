$(function () {
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
});