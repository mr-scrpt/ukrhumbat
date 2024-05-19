import $ from 'jquery'
$(document).on('af_complete', function (event, response) {
  // var form = response.form
  // // Если у формы определённый id
  // if (form.attr('id') == 'my_form_3') {
  //   // Скрываем её!
  //   form.hide()
  // }
  // // Иначе печатаем в консоль весь ответ
  // else {
  //   console.log(response)
  // }
  console.log('success', response)
})
