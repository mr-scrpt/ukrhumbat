import $ from 'jquery'

/**************/
/*Radio group controller*/
/**************/
$(() => {
  const $radioGroup = $('.radio-group')

  $radioGroup.each((_, radioBlock) => {
    const $radioBlock = $(radioBlock)

    $radioBlock.on('click', (e) => {
      const $radio = $(e.target.closest('.radio'))

      const $radio_control = $radio.find('.radio__control')

      const $siblings = $radio.siblings('.radio')

      console.log('sib', $siblings)
      console.log('radio', $radio)
      $siblings.removeClass('radio_state_checked')
      $siblings.find('.radio__control').attr('checked', false)
      $radio.addClass('radio_state_checked')
      $radio_control.attr('checked', true)
    })
  })
})
