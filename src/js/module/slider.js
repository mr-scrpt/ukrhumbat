import $ from 'jquery'
import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

Swiper.use([Navigation, Pagination, Autoplay, Thumbs])
// News slider
$(() => {
  const [navNext] = $('.news__nav-next')
  const [navPrev] = $('.news__nav-prev')
  sliderGen('.news .swiper', optionsNews({ navNext, navPrev }))
})

// Result slider
$(() => {
  const [navNext] = $('.result__nav-next')
  const [navPrev] = $('.result__nav-prev')
  sliderGen('.result .swiper', optionsResult({ navNext, navPrev }))
})

const sliderGen = (block, option) => new Swiper(block, option)

const optionsNews = ({ navNext, navPrev, pagination }) => ({
  spaceBetween: 20,
  // autoplay: true,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: pagination || null,
    clickable: true,
  },
  navigation: {
    nextEl: navNext,
    prevEl: navPrev,
  },
  // autoplay: {
  //   delay: 5000,
  // },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      centeredSlides: true,
    },
    520: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    994: {
      slidesPerView: 2.2,
      centeredSlides: false,
    },
  },
})
const optionsResult = ({ navNext, navPrev, pagination }) => ({
  spaceBetween: 20,
  // autoplay: true,
  loop: true,
  centeredSlides: true,
  pagination: {
    el: pagination || null,
    clickable: true,
  },
  navigation: {
    nextEl: navNext,
    prevEl: navPrev,
  },
  breakpoints: {
    320: {
      slidesPerView: 1.4,
      centeredSlides: true,
    },
    520: {
      slidesPerView: 2,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    994: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
})
