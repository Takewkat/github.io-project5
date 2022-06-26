//RegExp for name validation
const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,30}$/;
//RegExp for address validation
const addressRegex = /^[a-zA-ZÀ-ÿ0-9\s]{2,30}$/;
//RegExp for city validation
const cityRegex = /^[a-zA-ZÀ-ÿ\s]{2,30}$/;
//RegExp for email validation
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/;
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Error messages for form 
export function errorMessages(element, message) {
  element.nextElementSibling.innerText = message;
}

//Remove error messages for form
export function removeErrorMessages(element) {
  element.nextElementSibling.innerText = "";
}
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//Validation of name input 
export function validateName(element) {
  if (element.value.length < 2) {
    errorMessages(element, "Votre Nom, Prenom doit contenir au moins 2 caractères");
  } else if (!nameRegex.test(element.value)) {
    errorMessages(element, "Votre Nom, Prenom ne doit contenir que des lettres");
  } else {
    removeErrorMessages(element);
    return true;
  }
  return false
}

//Validation of address input
export function validateAddress(element) {
  if (element.value.length < 2) {
    errorMessages(element, 'Votre adresse doit contenir au moins 2 caractères');
  } else if (!addressRegex.test(element.value)) {
    errorMessages(element, 'Veuillez entrer votre adresse correctement');
  } else {
    removeErrorMessages(element);
    return true;
  }
  return false;
}

//Validation of city input
export function validateCity(element) {
  if (element.value.trim() === '') {
    errorMessages(element, 'Veuillez entrer votre ville');
  } else if (!cityRegex.test(element.value)) {
    errorMessages(element, 'Votre ville doit contenir au moins 2 caractères et ne doit contenir que des lettres');
  } else {
    removeErrorMessages(element);
    return true;
  }
  return false;
}

//Validation of email input
export function validateEmail(element) {
  if (element.value.trim() === '') {
    errorMessages(element, 'Veuillez entrer votre email');
  } else if (!emailRegex.test(element.value)) {
    errorMessages(element, 'Votre email est invalide');
  } else {
    removeErrorMessages(element);
    return true;
  }
  return false;
}
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
//all functions for form validation
function validate(form) {
  return [
    validateName(form.elements.firstName),
    validateName(form.elements.lastName),
    validateAddress(form.elements.address),
    validateCity(form.elements.city),
    validateEmail(form.elements.email),
  ].every(Boolean);
}

export {
  validate
}