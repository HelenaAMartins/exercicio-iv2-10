import { getCpf, phone, maskCep } from "./Masks.js";
import { saveOnStorage, arrayData } from "./Storage.js";
import { getCEP } from "./Cep.js";

document.getElementById("cep").addEventListener("blur", (param) => {
  getCEP(param.target.value);
});

document.getElementById("cep").addEventListener("input", (param) => {
  param.target.value = maskCep(param.target.value);
});

document.getElementById("cpf").addEventListener("input", (param) => {
  param.target.value = getCpf(param.target.value);
});

document.getElementById("telephone").addEventListener("input", (param) => {
  param.target.value = phone(param.target.value);
});

/////////////////////////
// LocalStorage function
////////////////////////

const saveData = (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const cpf = document.getElementById("cpf").value;
  const telephone = document.getElementById("telephone").value;
  const email = document.getElementById("email").value;
  const cep = document.getElementById("cep").value;
  const city = document.getElementById("city").value;
  const street = document.getElementById("street").value;
  const district = document.getElementById("district").value;
  const state = document.getElementById("state").value;

  arrayData.unshift({
    name,
    cpf,
    telephone,
    email,
    cep,
    city,
    street,
    district,
    state,
  });

  saveOnStorage(arrayData);
  clearInputs();
  window.location.href = "/table.html";
};

const clearInputs = () => {
  document.getElementById("name").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("telephone").value = "";
  document.getElementById("email").value = "";
  document.getElementById("cep").value = "";
  document.getElementById("city").value = "";
  document.getElementById("street").value = "";
  document.getElementById("district").value = "";
  document.getElementById("state").value = "";
};

document
  .getElementById("cadastrar")
  .addEventListener("submit", (e) => saveData(e));
