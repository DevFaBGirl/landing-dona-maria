const formPedido = document.getElementById("form-pedido");
const modalSucesso = document.getElementById("modal-sucesso");
const modalBotaoOk = document.getElementById("modal-ok");
const telefoneInput = document.getElementById("telefone");

telefoneInput.addEventListener("input", function () {
  let numeros = telefoneInput.value.replace(/\D/g, "");
  numeros = numeros.slice(0, 11);

  let formatado = "";
  if (numeros.length > 0) {
    formatado = "(" + numeros.slice(0, 2);
  }
  if (numeros.length >= 2) {
    formatado += ") ";
  }
  if (numeros.length > 2) {
    formatado += numeros.slice(2, 7);
  }
  if (numeros.length >= 8) {
    formatado += "-" + numeros.slice(7, 11);
  }

  telefoneInput.value = formatado;
});

formPedido.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const nome = formPedido.nome.value.trim();
  const telefone = telefoneInput.value.trim();
  const mensagem = formPedido.mensagem.value.trim();

  const texto = `Olá Dona Maria! Meu nome é ${nome} ${telefone}. ${mensagem}`;
  const url = `https://wa.me/5561992923420?text=${encodeURIComponent(texto)}`;

  window.open(url, "_blank");
  modalSucesso.hidden = false;
});

modalBotaoOk.addEventListener("click", function () {
  location.reload();
});
