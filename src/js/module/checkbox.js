import $ from 'jquery'

/**************/
/*Focuse State*/
/**************/
$(() => {
  const $checkboxList = $('.checkbox')

  $checkboxList.each((_, checkbox) => {
    const $checkbox = $(checkbox)
    const $control = $checkbox.find('.checkbox__control')

    $control.on('change', () => {
      console.log('change')
      if ($control.is(':checked')) {
        $checkbox.addClass('checkbox_state_checked')
      } else {
        $checkbox.removeClass('checkbox_state_checked')
      }
    })
  })
})

/**************/
/*Focuse Hover*/
/**************/

$(() => {
  const $inputs = $('.checkbox')
  $inputs.on('mouseover', ({ target }) => {
    const $item = $(target.closest('.checkbox'))
    $item.addClass('checkbox_state_hover')
  })

  $inputs.on('mouseleave', ({ target }) => {
    const $item = $(target.closest('.checkbox'))
    $item.removeClass('checkbox_state_hover')
  })
})
