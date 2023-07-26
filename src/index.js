import './less/index.less'

// Your code goes here!

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
