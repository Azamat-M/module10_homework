console.log('10.3')

const form = document.querySelector('.homework_10_3 form')
const body = document.querySelector('.homework_10_3 .chat_body')
const btnGeo = document.querySelector('.homework_10_3 .geo')
const websocket = new WebSocket('wss://echo.websocket.org/')

let isGeo = false

function sendToServer(e) {
	e.preventDefault()
	let text = form.elements['text'].value
	websocket.send(text)
	isGeo = false
	sendMsg(text)
}
function sendGeo(e) {
	e.preventDefault()

	if ('geolocation' in navigator) {
		navigator.geolocation.getCurrentPosition((position) => {
			const { coords } = position
			console.log(coords.latitude, coords.longitude)
			isGeo = true

			let text = 'Гео-локация'
			let span = document.createElement('span')
			let aElement = document.createElement('a')
			aElement.textContent = text
			span.appendChild(aElement)
			aElement.setAttribute(
				'href',
				`https://www.openstreetmap.org/#map=4/${coords.latitude}/${coords.longitude}`
			)
			aElement.setAttribute('target', '_blank')
			span.classList.add('text')
			body.appendChild(span)
			span.classList.add('client')

			websocket.send(text)
		})
	}
}

websocket.onopen = function () {
	console.log('OPENNED')
	form.addEventListener('submit', sendToServer)
	btnGeo.addEventListener('click', sendGeo)
}
websocket.onmessage = function (e) {
	if (!isGeo) {
		sendMsg(e.data, false)
	}
}
websocket.onerror = function (e) {
	console.log('Error', e)
}

function sendMsg(text, isClient = true) {
	let span = document.createElement('span')
	span.classList.add('text')
	span.textContent = text
	body.appendChild(span)
	if (isClient) {
		span.classList.add('client')
	} else {
		span.classList.add('server')
	}
}
