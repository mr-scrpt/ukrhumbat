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

  const bp = 1440
  const options = optionsResult({ navNext, navPrev })
  sliderCheckBrakepoint('.result .swiper', options, bp)
  // sliderGen('.result .swiper', optionsResult({ navNext, navPrev }))
})

// Support slider
$(() => {
  const [navNext] = $('.support__nav-next')
  const [navPrev] = $('.support__nav-prev')

  const bp = 1100
  const options = optionSupport({ navNext, navPrev })
  sliderCheckBrakepoint('.support .swiper', options, bp)
  // sliderGen('.result .swiper', optionsResult({ navNext, navPrev }))
})

const sliderClassController = (
  $sliderElem,
  $sliderWrapper,
  $sliderItem,
  type
) => {
  // const $sliderElem = $(mainClass)

  if (type === 'rm') {
    $sliderElem.removeClass('swiper')
    $sliderWrapper.removeClass('swiper-wrapper')
    $sliderItem.removeClass('swiper-slider')
  } else {
    $sliderElem.addClass('swiper')
    $sliderWrapper.addClass('swiper-wrapper')
    $sliderItem.addClass('swiper-slider')
  }
}
// Slider controller brakepoint
const sliderCheckBrakepoint = (sliderClass, options, bp) => {
  const windowWidth = +$(window).width()

  const $sliderElem = $(sliderClass)
  const $sliderWrapper = $sliderElem.find('.swiper-wrapper')
  const $sliderItem = $sliderElem.find('.swiper-slide')

  let slider = Swiper
  let sliderInit = false
  if (windowWidth < bp) {
    slider = sliderGen(sliderClass, options)
    sliderInit = true
  } else {
    sliderClassController($sliderElem, $sliderWrapper, $sliderItem, 'rm')
  }

  $(window).on('resize', () => {
    const windowWidth = +$(window).width()
    if (sliderInit && bp <= windowWidth) {
      slider.destroy()
      sliderClassController($sliderElem, $sliderWrapper, $sliderItem, 'rm')
      sliderInit = false
    } else if (!sliderInit && bp >= windowWidth) {
      sliderClassController($sliderElem, $sliderWrapper, $sliderItem, 'add')
      slider = sliderGen(sliderClass, options)
      sliderInit = true
    }
  })
}

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
  centeredSlides: false,
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
    1100: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
})
const optionSupport = ({ navNext, navPrev, pagination }) => ({
  spaceBetween: 20,
  // autoplay: true,
  loop: true,
  centeredSlides: false,
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
      slidesPerView: 2,
      centeredSlides: false,
    },
    994: {
      slidesPerView: 3,
      centeredSlides: false,
    },
    // 1100: {
    //   slidesPerView: 4,
    //   centeredSlides: false,
    // },
  },
})
