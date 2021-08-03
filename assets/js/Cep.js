export const getCEP = async (cepNumber) => {
  const formatedCep = cepNumber.replace(/[^0-9]/g, "");
  const data = await fetch(
    `https://viacep.com.br/ws/${formatedCep}/json/`
  ).then((res) => res.json());

  const { localidade, logradouro, bairro, uf } = data;

  document.getElementById("city").value = localidade;
  document.getElementById("street").value = logradouro;
  document.getElementById("district").value = bairro;
  document.getElementById("state").value = uf;
};
