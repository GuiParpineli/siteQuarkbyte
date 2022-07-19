const $ = a => document.querySelector(a);
const regx = /^[A-Z]+(\s{0,1}[A-Z]+)$/gmi;

const nome = $('#name')

const dados = {
  nome: '',
  email: '',
  telefone: 0
}


const error = a => $(a).style.border = 'red solid 2px';

const errorMsg = a => {
  const small = document.createElement('small');
  const text = document.createTextNode("O campo possui caracteres invalidos");
  small.appendChild(text);
  $(a).appendChild(small)
}

nome.onblur = () => {

  $('.name-error').innerHTML = '';
  if ((regx.test($('#name').value) && $('#name').value != '')) {
    dados.nome = $('#name').value
  } else {
    error('#name');
    errorMsg('.name-error')
  }
}

//const tele = $('#telefone');

/*tele.onkeyup = () => {
  if (tele.value.length === 2) {
    tele.value += '-';
  } if (tele.value.length === 8) {
    tele.value += '-';
  }
}*/

$('#submit-btn').onclick = a => {
  a.preventDefault();
}
