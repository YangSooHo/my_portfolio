
const skillMap = {

    // Back End
    'java': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/java-logo.png?raw=true" width="256" height="auto" alt="java" />',
    'spring-boot': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/spring-boot-logo.png?raw=true" width="256" height="auto" alt="spring-boot" />',
    'python': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/python-logo.png?raw=true" width="256" height="auto" alt="python" />',

    // Front End
    'css': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/css-logo.png?raw=true" width="256" height="auto" alt="css" />',
    'javascript': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/javascript-logo.png?raw=true" width="256" height="auto" alt="javascript" />',
    'jsp': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/jsp-logo.png?raw=true" width="256" height="auto" alt="jsp" />',
    'apache-freemarker': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/freemarker-logo.png?raw=true" width="256" height="auto" alt="apache-freemarker" />',
    'thymeleaf': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/thymeleaf-logo.png?raw=true" width="256" height="auto" alt="thymeleaf" />',
    'react-js': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/react-js-logo.png?raw=true" width="256" height="auto" alt="react-js" />',

    //Database
    'sql-server': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/sql-server-logo.png?raw=true" width="256" height="auto" alt="sql-server" />',
    'my-sql': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/my-sql-logo.png?raw=true" width="256" height="auto" alt="my-sql" />',
    'mongo-db': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/mongo-db-logo.png?raw=true" width="256" height="auto" alt="mongo-db" />',
    'h2-database': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/h2-database-logo.png?raw=true" width="256" height="auto" alt="h2" />',

    //Server
    'apache-tomcat': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/apache-tomcat-logo.png?raw=true" width="256" height="auto" alt="apache-tomcat" />',
    'redis-server': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/redis-server-logo.png?raw=true" width="256" height="auto" alt="redis-server" />',
    'nginx': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/nginx-logo.png?raw=true" width="256" height="auto" alt="nginx" />',
    'ms-azure': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/ms-azure-logo.png?raw=true" width="256" height="auto" alt="ms-azure" />',

    //IDE
    'git': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/git-logo.png?raw=true" width="256" height="auto" alt="git" />',
    'docker': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/docker-logo.png?raw=true" width="256" height="auto" alt="docker" />',
    'redmine': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/redmine-logo.png?raw=true" width="256" height="auto" alt="redmine" />',
    'atlassian': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/atlassian-logo.png?raw=true" width="256" height="auto" alt="atlassian" />',
    'notion': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/notion-logo.png?raw=true" width="256" height="auto" alt="notion" />',
    'intellij': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/intellij-logo.png?raw=true" width="256" height="auto" alt="intellij" />',
    'vscode': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/vs-code-logo.png?raw=true" width="256" height="auto" alt="vscode" />',
    'eclipse': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/eclipse-logo.png?raw=true" width="256" height="auto" alt="eclipse" />',
    'figma': '<img src="https://github.com/YangSooHo/my_portfolio/blob/main/images/skill/figma-logo.png?raw=true" width="256" height="auto" alt="figma" />',

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

    Swal.fire({
        title: isLogo ? `${skillMap[title]}` : `<i class="fas fa-check-square"></i> ${title}`,
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