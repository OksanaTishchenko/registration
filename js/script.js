let rellax = new Rellax('.rellax');
let form = document.querySelector('.form');
let selectButton = document.querySelector('.form__select-toggle');
let selectDropdown = document.querySelector('.select__dropdown');
let selectArrow = document.querySelector('.select-arrow');
let selectOptions = document.querySelectorAll('.select__option');
let phoneInput = document.querySelector('.phone-input');

const countries = {
  'Ukraine': '+380',
  'France': '+250',
  'Germany': '+276'
};

const hideError = (field) => {
  return setTimeout(() => {
    field.nextElementSibling.classList.remove("visible");
    field.nextElementSibling.classList.add("hidden");
  }, 4000)
};

const showError = (field) => {
  field.nextElementSibling.classList.remove("hidden");
  field.nextElementSibling.classList.add("visible");
};

const changeFormFields = (e) => {
  e.preventDefault();
  let isValidate = false
  const regPassword = /(?=.*[0-9])(?=.*[A-Za-z])(?=.*[!@#$%^&*])/;
  const regEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  let fisrtName = document.getElementById('firstName');
  let secondName = document.getElementById('secondName');
  let phone = document.getElementById('phone');
  let password = document.getElementById('password');
  let confrimPassword = document.getElementById('confirmPassword');
  let email = document.getElementById('email');
  let inputCheck = document.getElementById('checkbox');

  if (fisrtName.value.length < 2) {
    showError(fisrtName);
    hideError(fisrtName);
  }

  if (secondName.value.length < 2) {
    showError(secondName);
    hideError(secondName);
  }

  if (selectButton.innerText === "Country") {
    showError(selectDropdown);
    hideError(selectDropdown);
  }

  if (phone.value.length < 10 || phone.value === "Phone") {
    showError(phone);
    hideError(phone);
  }

  if (!regPassword.test(password.value)) {
    showError(password);
    hideError(password);
  }

  if (confrimPassword.value !== password.value) {
    showError(confrimPassword);
    hideError(confrimPassword);
  }

  if (!regEmail.test(email.value)) {
    showError(email);
    hideError(email);
  }

  if (!inputCheck.checked) {
    inputCheck.classList.add('checked-error');
    setTimeout(() => {
      inputCheck.classList.remove('checked-error');
    }, 4000)
  }

  if (fisrtName.value.length > 2 &&
    secondName.value.length > 2 &&
    phone.value.length > 10 &&
    regPassword.test(password.value) &&
    regEmail.test(email.value) &&
    inputCheck.checked) {

    fisrtName.value = "";
    secondName.value = "";
    selectButton.innerText = "Country";
    phone.value = "Phone";
    password.value = "";
    confrimPassword.value = "";
    email.value = "";
    inputCheck.checked = false;
  }
}

const handleSelect = () => {
  selectDropdown.classList.toggle('select__dropdown-visible');
  selectArrow.classList.toggle('select-arrow-rotate');
};

form.addEventListener("submit", changeFormFields);
selectButton.addEventListener("click", handleSelect);
selectOptions.forEach(item => {
  item.addEventListener("click", function (e) {
    e.stopPropagation();
    selectButton.innerText = this.innerText;
    selectButton.focus();
    selectDropdown.classList.remove("select__dropdown-visible");
    selectArrow.classList.remove('select-arrow-rotate');
    Object.keys(countries).map(country => {
      if (country == selectButton.innerText) {
        phoneInput.value = countries[country];
      }
    })
  });
});

document.addEventListener("click", (e) => {
  if (e.target !== selectButton) {
    selectDropdown.classList.remove('select__dropdown-visible');
    selectArrow.classList.remove('select-arrow-rotate');
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Tab" || e.key === "Escape") {
    selectDropdown.classList.remove('select__dropdown-visible');
    selectArrow.classList.remove('select-arrow-rotate');
  }
});

const tl = gsap.timeline({ defaults: { duration: .3 } })
tl.from('.first-name', { opacity: 0, y: 20 })
  .from('.second-name', { opacity: 0, y: 20 })
  .from('.select', { opacity: 0, y: 20 })
  .from('.phone', { opacity: 0, y: 20 })
  .from('.password', { opacity: 0, y: 20 })
  .from('.confirm-password', { opacity: 0, y: 20 })
  .from('.email', { opacity: 0, y: 30 })
  .from('.form__field-checkbox', { opacity: 0, y: 20 })










