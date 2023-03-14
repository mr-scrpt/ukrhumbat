import $ from 'jquery'
import { makeId } from './utils.js'

/**************/
/*Focuse State*/
/**************/
$(document).ready(() => {
  const $textarea = $('.textarea')
  $textarea.on('focus', ({ target }) => {
    const $item = $(target.closest('.textarea'))
    $item.addClass('textarea_state_focus')
    $item.removeClass('textarea_state_hover')
  })

  $textarea.on('blur', ({ target }) => {
    const $item = $(target.closest('.textarea'))
    $item.removeClass('textarea_state_focus')
  })
})

/**************/
/*Hover State*/
/**************/
$(() => {
  const $inputs = $('.textarea')
  $inputs.on('mouseover', ({ target }) => {
    const $item = $(target.closest('.textarea'))
    $item.addClass('textarea_state_hover')
  })

  $inputs.on('mouseleave', ({ target }) => {
    const $item = $(target.closest('.textarea'))
    $item.removeClass('textarea_state_hover')
  })
})
/*******************/
/*Textarea with Label*/
/*******************/
$(document).ready(() => {
  const $labels = $('.label')

  $labels.each((_, item) => {
    const $labelCurrent = $(item)
    const $textarea = $labelCurrent.find('.textarea')
    if ($textarea.length) {
      const idCustom = makeId(5)

      $labelCurrent.attr('for', idCustom)
      $textarea.attr('id', idCustom)
    }
  })
})
