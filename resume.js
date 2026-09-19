// =====================================================
// SMOOTH SCROLLING
// =====================================================

const navMenuAnchorTags =
    document.querySelectorAll('.nav-menu a');

for (let i = 0; i < navMenuAnchorTags.length; i++) {

    navMenuAnchorTags[i].addEventListener(
        'click',
        function (event) {

            event.preventDefault();

            const targetSectionID =
                this.getAttribute('href');

            const targetSection =
                document.querySelector(targetSectionID);

            if (targetSection) {

                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });

            }

        }
    );

}


// =====================================================
// SKILL BAR ANIMATION
// =====================================================

const skillBars =
    document.querySelectorAll('.skill-progress > div');

const observer =
    new IntersectionObserver(

        function (entries, observer) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.style.transition =
                        'width 1s ease';

                    entry.target.style.width =
                        '100%';

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.2
        }

    );


skillBars.forEach(function (bar) {

    observer.observe(bar);

});
