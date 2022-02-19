const navLinks = document.querySelector('.nav__options')
const hamMenu = document.querySelector('.ham_menu')
const aboutLink = document.getElementById('about')
const projectLink = document.getElementById('projects')
const resumeLink = document.getElementById('resume')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')


const underlineLink = () => {
    let y = window.scrollY
    
    if (window.innerWidth > 1100) {
        if (y <= 575) {
            aboutLink.classList.add('underline')
            projectLink.classList.remove('underline')
            return 
        }
        else if (y > 575 && y < 1400) {
            aboutLink.classList.remove('underline')
            projectLink.classList.add('underline')
            resumeLink.classList.remove('underline')
            return 
        }
        else {
            projectLink.classList.remove('underline')
            resumeLink.classList.add('underline')
            return
        }
    }
}

const openHamMenu = () => {
    navLinks.classList.toggle('nav__options__active')
    bar1.classList.toggle('bar1__active')
    bar2.classList.toggle('bar2__active')
    bar3.classList.toggle('bar3__active')
    return
}

const closeHamMenu = () => {
    if (navLinks.className === 'nav__options nav__options__active') {
        navLinks.classList.remove('nav__options__active')
        bar1.classList.remove('bar1__active')
        bar2.classList.remove('bar2__active')
        bar3.classList.remove('bar3__active')
        return 
    }
}

const removeUnderline = () => {
    if (window.innerWidth < 1050) {
        aboutLink.classList.remove('underline')
        projectLink.classList.remove('underline')
        resumeLink.classList.remove('underline')
    }
}

const removeHamOptions = () => {
    if (window.innerWidth > 1050) {
        navLinks.classList.remove('nav__options__active')
    }
}

window.addEventListener('scroll', underlineLink)
window.addEventListener('resize', removeUnderline)
window.addEventListener('resize', removeHamOptions)
hamMenu.addEventListener('click', openHamMenu)

aboutLink.addEventListener('click', closeHamMenu)
projectLink.addEventListener('click', closeHamMenu)
resumeLink.addEventListener('click', closeHamMenu)




