import { removeStorage, arrayData } from "./Storage.js";

const populateMain = (target, template) => {
  const newTarget = document.querySelector(target);
  newTarget.innerHTML = "";
  newTarget.innerHTML = template;
};

let templateTable = '';
arrayData.forEach(e => {
  const {name, cpf, telephone, email, cep, city, street, district, state} = e;
  templateTable += '<div class="tableInfo">';
  templateTable += `<div class="inputInfo">
  <h3>Nome</h3>
  <p>${name}</p>
  </div>

  <div class="inputInfo">
  <h3>CPF</h3>
  <p>${cpf}</p>
  </div>

  <div class="inputInfo">
  <h3>Telefone</h3>
  <p>${telephone}</p>
  </div>

  <div class="inputInfo">
  <h3>E-mail</h3>
  <p>${email}</p>
  </div>

  <div class="inputInfo">
  <h3>CEP</h3>
  <p>${cep}</p>
  </div>

  <div class="inputInfo">
  <h3>Cidade</h3>
  <p>${city}</p>
  </div>

  <div class="inputInfo">
  <h3>Rua</h3>
  <p>${street}</p>
  </div>

  <div class="inputInfo">
  <h3>Bairro</h3>
  <p>${district}</p>
  </div>

  <div class="inputInfo">
  <h3>Estado</h3>
  <p>${state}</p>
  </div>
  `
  templateTable += '</div>';
});


populateMain(".container", templateTable);

document
  .getElementById("delete")
  .addEventListener("click", removeStorage);