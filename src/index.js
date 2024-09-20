import './less/index.less'

// Your code goes here!
window.addEventListener("DOMContentLoaded", () => {
    //first idea: change 'fun in the sun' button mouseover option to yellow or orange!

const bottomButtons = document.querySelectorAll('.destination .btn')

const funInTheSunButton = bottomButtons[0]

funInTheSunButton.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'orange'
})

//second idea: change the 'mountain excursion' button mouseover option to gray or brown!

const mountainButton = bottomButtons[1]

mountainButton.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'slategray'
})

//third idea: change the 'island getaway' button mouseover option to yellow or green!

const islandButton = bottomButtons[2]

islandButton.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'yellow'
})

//fourth idea: change the text content of H1 when mouse is over it!

const header = document.querySelector('h1')

header.addEventListener('mouseover', event => {
    event.target.textContent = `You Comin' or WHAT ?!😄 `
})

//fifth idea: change the text color of the H! to cyan when the mouse goes over it!

header.addEventListener('mouseover', event => {
    event.target.style.color = 'cyan'
})

//sixth idea: change the text of the bottom buttons when double clicked!

bottomButtons.forEach(button => {
    button.addEventListener('dblclick', event => {
        event.target.textContent = 'Geez, calm down..once is enough lol'
    })
})

//seventh idea: create a wheel event that pops up an alert at the top of the page saying 'betcha can't wait to get to the bottom when the wheel is rolled!

document.body.addEventListener('wheel', () => {
    alert(`BETCHA CAN'T WAIT TO GET TO THE BOTTOM, HUH??`)
})

//eighth idea: make the buttons disappear when the enter key is pressed!

window.addEventListener('keydown', event => {
    if(event.key === 'Enter'){
        document.body.textContent = `PSYCHE!!! 😜😂`
        document.body.style.fontSize = '50px'
    }
})

//nineth idea: change the text of the nav links when the mouse is over them!

const links = document.querySelectorAll('.nav-link')

links.forEach(link => {
    link.addEventListener('mouseover', event => {
        if(link.textContent === 'Home'){
            event.target.textContent = 'House!'
            event.preventDefault()
        } else if(link.textContent === 'About Us'){
            event.target.textContent = 'Learning Spot!'
            event.preventDefault()
        } else if(link.textContent === 'Blog'){
            event.target.textContent = 'Come See!'
            event.preventDefault()
        } else if(link.textContent === 'Contact'){
            event.target.textContent = 'Hit Us Up!'
            event.preventDefault()
        }
    })
})

//tenth idea: change the cfont size of the font of the paragraphs when mouse runs over them!

const pS = document.body.querySelectorAll('p')

pS.forEach(p => {
    p.addEventListener('mouseover', event => {
        event.target.style.fontSize = '25px'
    })
})

})



