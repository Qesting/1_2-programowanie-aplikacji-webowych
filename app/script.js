(function () {
  document.getElementById('ex1_button')?.addEventListener('click', () => {
    const str = Array(10).fill(0).map((_, index) => index.toString()).join(',')
    document.getElementById('ex1_content').textContent = str
  })

  document.getElementById('ex2_text')?.addEventListener('input', event => {
    const content = event.target.value
    let alertText
    if (content.length !== 9)
      alertText = 'Długość numeru musi być równa 9'
    else if (content.search(/\p{L}/v) + 1)
      alertText = 'Numer nie może zawierać liter'
    else if (content.search(/\D/) + 1)
      alertText = 'Numer nie może zawierać znaków specjalnych'
    else
      alertText = 'Numer telefonu jest poprawny'

    document.getElementById('ex2_content').textContent = alertText
  })

  const draggable = document.getElementById('ex3_element')
  draggable.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/html', event.target.outerHTML)
  })
  draggable.addEventListener('dragend', event => {
    event.target.remove()
  })

  const target = document.getElementById('ex3_two')
  target.addEventListener('dragover', event => {
    event.preventDefault()
  })
  target.addEventListener('drop', event => {
    event.preventDefault()
    event.target.innerHTML = event.dataTransfer.getData('text/html')
  })
})();