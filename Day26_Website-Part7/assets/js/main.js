const hamburgerCheckbox = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');
const navbarItems = document.getElementsByClassName('navbar__link');
const sections = document.getElementsByClassName('section');
const footer = document.getElementById('contact');
const menu = document.querySelector('.hamburger');

/**
 * Hamburger menu
 */
hamburgerCheckbox.addEventListener('change', () => {
    navbar.classList.toggle('active');
});

function menuColorChange() {
    for (let section of sections) {
        let sectionBoundaries = section.getBoundingClientRect();

        for(let item of navbarItems) {
            let itemBoundaries = item.getBoundingClientRect();

            if (itemBoundaries.y >= sectionBoundaries.y && 
                (itemBoundaries.y + itemBoundaries.height) <= (sectionBoundaries.y + sectionBoundaries.height)) {
                let color = section.dataset.color;

                switch (color) {
                case 'light':
                    item.classList.add('light');
                    break;
                case 'dark':
                    item.classList.remove('light');
                    break;
                }
            }
        }
    }

    let fb = footer.getBoundingClientRect();
    let mb = menu.getBoundingClientRect();
    let menu_bars = document.querySelectorAll('.hamburger span');

    if(mb.y >= fb.y && mb.y + mb.height <= fb.y + fb.height) {

        for (let bar of menu_bars) {
            bar.classList.add('dark');
        }
    }else {
        for (let bar of menu_bars) {
            bar.classList.remove('dark');
        }
    }
}

document.addEventListener('scroll', menuColorChange);


