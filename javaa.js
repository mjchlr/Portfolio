document.addEventListener('DOMContentLoaded', function () {
    const sidebarLinks = document.querySelectorAll('.sidebar');
    const contentSections = document.querySelectorAll('.content-section');
    const bienvenueText = document.querySelector('.bienvenue');
    const portfolioLink = document.querySelector('.welcome');

    function hideAllSections() {
        contentSections.forEach(section => {
            section.classList.remove('active');
            section.style.display = 'none';
        });
    }

    function showSection(sectionId) {
        const sectionToShow = document.getElementById(sectionId);
        hideAllSections();

        bienvenueText.style.opacity = 0;
        setTimeout(() => {
            bienvenueText.style.display = 'none';
        }, 0);

        sectionToShow.style.display = 'block';
        setTimeout(() => {
            sectionToShow.classList.add('active');
        }, 10);
    }

    function activateTab(tab) {
        sidebarLinks.forEach(link => {
            link.classList.remove('active');
        });
        tab.classList.add('active');
    }


    sidebarLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            activateTab(this);
            const sectionId = this.getAttribute('data-section');
            showSection(sectionId);
        });
    });

    portfolioLink.addEventListener('click', function (e) {
        e.preventDefault();
        location.reload();
    });
});


