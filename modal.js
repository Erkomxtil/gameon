function editNav() {
  var x = document.getElementById("myTopnav")
  if (x.className === "topnav") {
    x.className += " responsive"
  } else {
    x.className = "topnav"
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground")
const modalBtn = document.querySelectorAll(".modal-btn")
const formData = document.querySelectorAll(".formData")
const closemodalBtn = document.querySelector(".close")
const btnSubmit = document.querySelector("#btn-submit")
const firstname = document.querySelector("#firstName")
const lastname = document.querySelector("#lastName")
const email = document.querySelector("#email")
const date = document.querySelector("#birthdate")
const quantity = document.querySelector("#quantity")
const locationsWrapper = document.querySelector("#locations")
const locations = document.querySelectorAll(".checkbox-input[type=\"radio\"]")
const terms = document.querySelector("#checkbox1")
const thankyou = document.querySelector(".thank-you")
const thankyoucross = document.querySelector("#close-thank-you")
const thankyouclose = document.querySelector(".thank-you button")
const resetform = document.querySelector("form[name=\"reserve\"]")

// launch modal event
modalBtn.forEach(
  (btn) => btn.addEventListener("click", launchModal)
)

// close modal event
closemodalBtn.addEventListener("click", closeModal)

// launch modal form
function launchModal() {
  modalbg.style.display = "block"
}

// Close modal form 
function closeModal() {
  modalbg.style.display ="none"
}

// Check input firstname and lastname
firstname.addEventListener("focusout", 
  () => {
    checkFirstAndName(firstname)
})

lastname.addEventListener("focusout", 
  () => {
    checkFirstAndName(lastname)
})

function checkFirstAndName(inputValue) {
  if(inputValue?.value.trim() !== "" && inputValue?.value.length.trim() > 1) {
    inputValue.parentNode.setAttribute("data-error-visible", "false")
    return true
  } else  {
    inputValue.parentNode.setAttribute("data-error-visible", "true")
    return false
  }
}

// Check input email 
email.addEventListener("focusout", 
  () => {
    checkEmail(email)
})

function checkEmail(email) {
  var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.match(emailRegex)) {
    email.parentNode.setAttribute("data-error-visible", "false")
    return true
  } else {
    email.parentNode.setAttribute("data-error-visible", "true")
    return false
  }
}

// Check input date
date.addEventListener("focusout", 
  () => {
    checkDate()
})

function checkDate() {
  if(date.value === "") {
    date.parentNode.setAttribute("data-error-visible", "true")
    return false
  } else {
    date.parentNode.setAttribute("data-error-visible", "false")
    return true
  }
}

// Check input quantity
quantity.addEventListener("focusout", 
  () => {
    checkQuantity()
  }
)

function checkQuantity() {
  if(quantity.value < 0 || quantity.value === ""){
    quantity.parentNode.setAttribute("data-error-visible", "true")
    return false
  } else {
    quantity.parentNode.setAttribute("data-error-visible", "false")
    return true
  }
}

// Check input location
locationsWrapper.addEventListener("change", () => {
  checkLocations()
})

function checkLocations() {
  let answer = false
  locationsWrapper.setAttribute('data-error-visible', 'true')
  locations.forEach( location => {
    if(location.checked === true) {
      locationsWrapper.setAttribute('data-error-visible', 'false')
      return  answer = true
    }
  })
  return answer
}

// Check input terms of use
terms.addEventListener("change", () => {
  termsOfUse()
})

function termsOfUse() {
  if( terms.checked !== true) {
    terms.parentNode.setAttribute('data-error-visible', 'true')
    return false
  } else {
    terms.parentNode.setAttribute('data-error-visible', 'false')
    return true
  }
}

// Open thank you modal
function openThankYou() {
  thankyou.classList.add("active")
}

// Close thank you modal
thankyouclose.addEventListener("click", () => {
  closeThankYouModal()
})

thankyoucross.addEventListener("click", () => {
  closeThankYouModal()
})

function closeThankYouModal() {
  thankyou.classList.remove("active")
}

// Form submission
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault()
  checkLocations()

  if(
    checkFirstAndName(firstname) === true &&
    checkFirstAndName(lastname) === true &&
    checkEmail(email) === true &&
    checkDate() === true &&
    checkQuantity() === true &&
    checkLocations() === true &&
    termsOfUse() === true) {
      closeModal()
      resetform.reset()
      openThankYou()

    }
})


