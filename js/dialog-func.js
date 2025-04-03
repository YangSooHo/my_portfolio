
const skillMap = {

    // Back End
    'java': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/java-logo.png?raw=true',
    'spring-boot': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/spring-boot-logo.png?raw=true',
    'python': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/python-logo.png?raw=true',

    // Front End
    'css': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/css-logo.png?raw=true',
    'javascript': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/javascript-logo.png?raw=true',
    'jsp': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/jsp-logo.png?raw=true',
    'apache-freemarker': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/freemarker-logo.png?raw=true',
    'thymeleaf': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/thymeleaf-logo.png?raw=true',
    'react-js': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/react-js-logo.png?raw=true',

    //Database
    'sql-server': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/sql-server-logo.png?raw=true',
    'my-sql': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/my-sql-logo.png?raw=true',
    'mongo-db': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/mongo-db-logo.png?raw=true',
    'h2-database': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/h2-database-logo.png?raw=true',

    //Server
    'apache-tomcat': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/apache-tomcat-logo.png?raw=true',
    'redis-server': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/redis-server-logo.png?raw=true',
    'nginx': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/nginx-logo.png?raw=true',
    'ms-azure': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/ms-azure-logo.png?raw=true',

    //IDE
    'git': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/git-logo.png?raw=true',
    'docker': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/docker-logo.png?raw=true',
    'redmine': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/redmine-logo.png?raw=true',
    'atlassian': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/atlassian-logo.png?raw=true',
    'notion': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/notion-logo.png?raw=true',
    'intellij': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/intellij-logo.png?raw=true',
    'vscode': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/vs-code-logo.png?raw=true',
    'eclipse': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/eclipse-logo.png?raw=true',
    'figma': 'https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/figma-logo.png?raw=true',
}

function dialogDiv(title, container, name = null) {
    const isMobile = /Android|iPhone/i.test(navigator.userAgent);

    const html = name === null ? $(container).html() : $(`#${container} .${name}`).html();
    const isLogo = Object.keys(skillMap).includes(title);

    // const skillShowAnimate = 'animate__animated animate__fadeInBottomLeft animate__faster'
    // const skillHideAnimate = 'animate__animated animate__fadeOutTopRight animate__faster'

    const root = document.documentElement;
    const bgColor = getComputedStyle(root).getPropertyValue('--main-bg-color').trim();
    const btnColor = getComputedStyle(root).getPropertyValue('--btn-modal-color').trim();
    const fontColor = getComputedStyle(root).getPropertyValue('--white-color').trim();

    //Loading Modal
    Swal.fire({
        title: "Loading...",
        allowOutsideClick: false,
        color: fontColor,
        background: bgColor,
        confirmButtonColor: btnColor,
        didOpen: () => {
            Swal.showLoading(); // 로딩 애니메이션 실행
        }
    });

    //Did Modal
    const img = new Image();
    img.src = skillMap[title];
    img.width = 256;
    img.alt = title;
    img.onload = function () {
        Swal.fire({
            title: isLogo ? img : `<i class="fas fa-check-square"></i> ${title}`,
            width: isMobile?'80%': 1000,
            html: `
            <div class="alert-container">
                ${html}
            </div>
        `,
            color: fontColor,
            background: bgColor,
            confirmButtonColor: btnColor,
            showClass: {popup: `animate__animated animate__fadeIn animate__faster`},
            hideClass: {popup: `animate__animated animate__fadeOut animate__faster`}
        })
    }
}