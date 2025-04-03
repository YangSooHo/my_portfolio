
const skillMap = {

    // Back End
    'java': '<img src="../images/skill/java-logo.png" width="256" height="auto" alt="java" />',
    'spring-boot': '<img src="../images/skill/spring-boot-logo.png" width="256" height="auto" alt="spring-boot" />',
    'python': '<img src="../images/skill/python-logo.png" width="256" height="auto" alt="python" />',

    // Front End
    'css': '<img src="../images/skill/css-logo.png" width="256" height="auto" alt="css" />',
    'javascript': '<img src="../images/skill/javascript-logo.png" width="256" height="auto" alt="javascript" />',
    'jsp': '<img src="../images/skill/jsp-logo.png" width="256" height="auto" alt="jsp" />',
    'apache-freemarker': '<img src="../images/skill/freemarker-logo.png" width="256" height="auto" alt="apache-freemarker" />',
    'thymeleaf': '<img src="../images/skill/thymeleaf-logo.png" width="256" height="auto" alt="thymeleaf" />',
    'react-js': '<img src="../images/skill/react-js-logo.png" width="256" height="auto" alt="react-js" />',

    //Database
    'sql-server': '<img src="../images/skill/sql-server-logo.png" width="256" height="auto" alt="sql-server" />',
    'my-sql': '<img src="../images/skill/my-sql-logo.png" width="256" height="auto" alt="my-sql" />',
    'mongo-db': '<img src="../images/skill/mongo-db-logo.png" width="256" height="auto" alt="mongo-db" />',
    'h2-database': '<img src="../images/skill/h2-database-logo.png" width="256" height="auto" alt="h2" />',

    //Server
    'apache-tomcat': '<img src="../images/skill/apache-tomcat-logo.png" width="256" height="auto" alt="apache-tomcat" />',
    'redis-server': '<img src="../images/skill/redis-server-logo.png" width="256" height="auto" alt="redis-server" />',
    'nginx': '<img src="../images/skill/nginx-logo.png" width="256" height="auto" alt="nginx" />',
    'ms-azure': '<img src="../images/skill/ms-azure-logo.png" width="256" height="auto" alt="ms-azure" />',

    //IDE
    'git': '<img src="../images/skill/git-logo.png" width="256" height="auto" alt="git" />',
    'docker': '<img src="../images/skill/docker-logo.png" width="256" height="auto" alt="git" />',
    'redmine': '<img src="../images/skill/redmine-logo.png" width="256" height="auto" alt="git" />',
    'atlassian': '<img src="../images/skill/atlassian-logo.png" width="256" height="auto" alt="git" />',
    'notion': '<img src="../images/skill/notion-logo.png" width="256" height="auto" alt="git" />',
    'intellij': '<img src="../images/skill/intellij-logo.png" width="256" height="auto" alt="git" />',
    'vscode': '<img src="../images/skill/vs-code-logo.png" width="256" height="auto" alt="git" />',
    'eclipse': '<img src="../images/skill/eclipse-logo.png" width="256" height="auto" alt="git" />',
    'figma': '<img src="../images/skill/figma-logo.png" width="256" height="auto" alt="git" />',

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