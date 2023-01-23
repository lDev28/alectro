const d = document
const wrapper = d.querySelector('.wrapper')


const $scrollbtn = d.querySelector('.scroll-btn')

$scrollbtn.addEventListener('click', () => {
	const $main = d.querySelector('.main')
	const scrollPosition = $main.scrollHeight
	wrapper.scrollTo({
		top: scrollPosition,
		behavior: 'smooth'
	})
})


function setScrollEffects() {

	const $aboutCard = d.querySelectorAll('.about__card')

	for (const aboutElem of $aboutCard) {

		const aboutElemScroll = aboutElem.getBoundingClientRect()
		const aboutElemPosition = aboutElemScroll.top - (aboutElemScroll.bottom - aboutElemScroll.top)


		if (aboutElemPosition <= 150) {
			aboutElem.classList.add('showen')
		} else {
			aboutElem.classList.remove('showen')
		}
	}
}



function setScrollEffectsSlide() {

	const $aboutSlide = d.querySelectorAll('.about__slide')

	for (const aboutSlide of $aboutSlide) {

		const aboutElemScroll = aboutSlide.getBoundingClientRect()
		const aboutElemPosition = aboutElemScroll.top - (aboutElemScroll.bottom - aboutElemScroll.top)

		if (aboutElemPosition <= 300) {
			aboutSlide.classList.add('showen')
		} else {
			aboutSlide.classList.remove('showen')
		}
	}
}


function setScrollEffectsServicesCard() {

	const $servicesCards = d.querySelectorAll('.services__card')

	for (const servicesElem of $servicesCards) {

		const servicesElemScroll = servicesElem.getBoundingClientRect()
		const servicesElemPosition = servicesElemScroll.top - (servicesElemScroll.bottom - servicesElemScroll.top)


		if (servicesElemPosition <= 300) {
			servicesElem.classList.add('showen')
		} else {
			servicesElem.classList.remove('showen')
		}
	}
}


wrapper.addEventListener('scroll', () => {

	const wrapperTotalHight = wrapper.scrollHeight
	const navWidth = ((wrapper.scrollTop + wrapper.clientHeight) * 100) / wrapperTotalHight
	const scrollNav = d.querySelector('.scroll-nav')

	scrollNav.style.width = `${navWidth}%`

	setScrollEffects()
	setScrollEffectsSlide()
	setScrollEffectsServicesCard()
})