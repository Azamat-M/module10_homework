console.log('10.1')

const button = document.querySelector('.homework_10_1 button')
const svg = document.querySelector('.homework_10_1 svg')

const FILL = 'bi-arrow-down-left-circle-fill'
const CIRCLE = 'bi-arrow-down-left-circle'

button.addEventListener('click', (e) => {
	e.preventDefault()
	if (svg.classList.contains(CIRCLE)) {
		svg.classList.remove(CIRCLE)
		svg.classList.add(FILL)
	} else {
		svg.classList.remove(FILL)
		svg.classList.add(CIRCLE)
	}
})
