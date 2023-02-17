import $ from 'jquery'
import Swiper, { Navigation, Pagination, Autoplay, Thumbs } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

Swiper.use([Navigation, Pagination, Autoplay, Thumbs])
// Paysys slider
$(() => {
  // const [paginationElem] = $('.paysys__pagination')
  const [navNext] = $('.news__nav-next')
  const [navPrev] = $('.news__nav-prev')
  sliderGen('.news__slider.swiper', optionsPaysys({ navNext, navPrev }))
})

const sliderGen = (block, option) => new Swiper(block, option)

const optionsPaysys = ({ navNext, navPrev, pagination }) => ({
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
const optionsPosition = (prev, next) => ({
  slidesPerView: 1,
  spaceBetween: 15,
  navigation: {
    nextEl: next || null,
    prevEl: prev || null,
  },
  autoplay: {
    delay: 5000,
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    994: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
})
