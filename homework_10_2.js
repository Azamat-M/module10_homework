console.log('10.2')

const button2 = document.querySelector('.homework_10_2 button')

button2.addEventListener('click', (e) => {
	e.preventDefault()
	let screenHeight = window.screen.height
	let screenWidth = window.screen.width

	alert(`Размеры экрана ${screenWidth}x${screenHeight}`)
})
