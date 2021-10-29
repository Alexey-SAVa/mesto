document.querySelector('.profile__edit-button').addEventListener('click',(event) => {
  document.querySelector('.overlay').classList.add('overlay_open')
})

document.querySelector('.overlay__close-button').addEventListener('click',(event) => {
  document.querySelector('.overlay').classList.remove('overlay_open')
})

document.addEventListener('DOMContentLoaded',() => {
  const nameEl = document.querySelector('.profile__name')
  const nameText = nameEl.textContent
  document.querySelector('.overlay__input_name').value = nameText

  const descEl = document.querySelector('.profile__desc')
  const descText = descEl.textContent
  document.querySelector('.overlay__input_desc').value = descText

})

const formElement = document.querySelector('.overlay__edit-form')
formElement.addEventListener('submit',(event) => {
  event.preventDefault()
  const nameEl = document.querySelector('.profile__name')
  const descEl = document.querySelector('.profile__desc')
  nameEl.textContent = event.target.elements.name.value
  descEl.textContent = event.target.elements.desc.value
  document.querySelector('.overlay').classList.remove('overlay_open')
})
