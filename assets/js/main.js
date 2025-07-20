
// Responsive menu
const showMenu = (toggleId , navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggleId && nav){
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show-menu")
        })
    }
}

showMenu("nav-toggle","nav-menu")


//When we click on each nav__link, we remove the show-menu class
const navlink = document.querySelectorAll(".nav__link")

const linkAction = () => {
    const navMenu = document.querySelector("#nav-menu")
    navMenu.classList.remove("show-menu")
}

navlink.forEach( (item) => {
    item.addEventListener("click",linkAction)
})

//Scroll active link

const sections = document.querySelectorAll("section[id]")


function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach( current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50 ;
        let sectionID = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*=" + sectionID + "]").classList.add("active-link")
        }
        else{
            document.querySelector(".nav__menu a[href*=" + sectionID + "]").classList.remove("active-link")

        } 

    })

}
window.addEventListener("scroll", scrollActive)

// Change Background Header

function scrollHeader () {
    const nav = document.querySelector("#header");

    if(this.scrollY >= 200){
        nav.classList.add("scroll-header");
    }
    else{
        nav.classList.remove("scroll-header")
    }
}
window.addEventListener("scroll", scrollHeader);

//Show Scroll Top
function scrollTop () {
    const scrollTop = document.querySelector("#scroll-top");

    if(this.scrollY >= 560){
        scrollTop.classList.add("scroll-top");
    }
    else{
        scrollTop.classList.remove("scroll-top")
    }
}
window.addEventListener("scroll", scrollTop);

// Dark Theme 

const themeButton = document.getElementById("theme-button");
const darktheme = "dark-theme" ;
const iconTheme = "bx-sun"

//
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

const getCurrentTheme = () => document.body.classList.contains(darktheme) ? "dark" : "light"
const getCurrentIcon = () =>  themeButton.classList.contains(iconTheme) ? "dark" : "light"

if(selectedTheme){
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darktheme)
    themeButton.classList[selectedIcon === "bx-moon" ? "add" : "remove"](iconTheme)

}


//
themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darktheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem("selected-theme",getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

//scrool animation

const sr = ScrollReveal( {
    origin : "top",
    distance : "30px",
    duration : 2000 ,
    reset : true
});

sr.reveal(`.home__data, .home__img, .about__data, .about__img,
            .services__content, .menu__content, .app__data, .app_img,
            .contact__data, .contact__button, .footer__content `, {
    interval :200
})