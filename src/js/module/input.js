import $ from 'jquery'
import { makeId } from './utils.js'

/**************/
/*Focuse State*/
/**************/
$(() => {
  const $inputsControl = $('.input__control')
  $inputsControl.on('focus', ({ target }) => {
    const $item = $(target.closest('.input'))
    $item.addClass('input_state_focus')
    $item.removeClass('input_state_hover')
  })

  $inputsControl.on('blur', ({ target }) => {
    const $item = $(target.closest('.input'))
    $item.removeClass('input_state_focus')
  })
})

/**************/
/*Hover State*/
/**************/
$(() => {
  const $inputs = $('.input')
  $inputs.on('mouseover', ({ target }) => {
    const $item = $(target.closest('.input'))
    $item.addClass('input_state_hover')
  })

  $inputs.on('mouseleave', ({ target }) => {
    const $item = $(target.closest('.input'))
    $item.removeClass('input_state_hover')
  })
})

/*******************/
/*Inputs with Label*/
/*******************/
$(() => {
  const $labels = $('.label')

  $labels.each((_, item) => {
    const $labelCurrent = $(item)
    const $input = $labelCurrent.find('.input__control')
    if ($input.length) {
      const idCustom = makeId(5)

      $labelCurrent.attr('for', idCustom)
      $input.attr('id', idCustom)
    }
  })
})
