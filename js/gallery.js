const images = [
	'media/slider/slider1.jpg',
	'media/slider/slider2.png',
	'media/slider/slider3.jpg',
]

const galleryTrack = document.querySelector('.gallery-track')

function animationGallery(imgUrl) {
	const item = document.createElement('div')
	item.className = 'gallery-item'

	const img = document.createElement('img')
	img.src = imgUrl
	img.alt = 'Gallery Image'

	item.appendChild(img)
	return item
}

images.forEach(imgUrl => {
	galleryTrack.appendChild(animationGallery(imgUrl))
})

images.forEach(imgUrl => {
	galleryTrack.appendChild(animationGallery(imgUrl))
})

images.forEach(imgUrl => {
	galleryTrack.appendChild(animationGallery(imgUrl))
})

images.forEach(imgUrl => {
	galleryTrack.appendChild(animationGallery(imgUrl))
})