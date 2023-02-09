import $ from 'jquery'

export const hoverElement = (className) => {
  console.log('in module')
  const selector = `.${className}`
  const init = `${className}_init`
  const active = `${className}_active`

  $(document).on('mouseover', selector, (e) => {
    const $item = $(e.target).closest(selector)

    if ($item.hasClass(init)) {
      $item.removeClass(init)
      $item.addClass(active)
    }
  })

  $(document).on('mouseleave', selector, (e) => {
    const $item = $(e.target).closest(selector)

    if ($item.hasClass(active)) {
      $item.removeClass(active)
      $item.addClass(init)
    }
  })
}

export const makeId = (length) => {
  let result = ''
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export const isWebp = () => {
  // Проверка поддержки webp
  function testWebP(callback) {
    let webP = new Image()
    webP.onload = webP.onerror = function () {
      callback(webP.height == 2)
    }
    webP.src =
      'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA'
  }
  // Добавление класса _webp или _no-webp для HTML
  testWebP(function (support) {
    let className = support === true ? 'webp' : 'no-webp'
    document.documentElement.classList.add(className)
  })
}
