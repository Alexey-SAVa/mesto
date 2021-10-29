const editButton = document.querySelector('.profile__edit-button')
const nameEl = document.querySelector('.profile__name')
const descEl = document.querySelector('.profile__desc')

const overlay = document.querySelector('.overlay')
const closeButton = document.querySelector('.overlay__close-button')
const formElement = document.querySelector('.overlay__edit-form')
const overlayInputName = document.querySelector('.overlay__input_name')
const overlayInputDesc = document.querySelector('.overlay__input_desc')

editButton.addEventListener('click',(event) => {
  overlay.classList.add('overlay_open')
})

closeButton.addEventListener('click',(event) => {
  overlay.classList.remove('overlay_open')
})

document.addEventListener('DOMContentLoaded',() => {
  const nameText = nameEl.textContent
  overlayInputName.value = nameText

  const descText = descEl.textContent
  overlayInputDesc.value = descText
})

formElement.addEventListener('submit',(event) => {
  event.preventDefault()
  nameEl.textContent = event.target.elements.name.value
  descEl.textContent = event.target.elements.desc.value
  overlay.classList.remove('overlay_open')
})
