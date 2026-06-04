// Fase 1: Configuração Inicial do Jogo
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativasRestantes = 3;
let jogoAtivo = true; 
let historicoPalpites = []; 

function verificar() {
  if (tentativasRestantes <= 0 || !jogoAtivo) {
    document.getElementById("resultado").innerText = "O jogo acabou! Reinicie o jogo.";
    return;
  }

  const campo = document.getElementById("palpite");
  // Captura o botão de enviar
  const botaoEnviar = document.getElementById("btnEnviar");

  if (campo.value.trim() === "") {
    document.getElementById("resultado").innerText = "⚠️ O campo está vazio! Digite um número para jogar.";
    return; 
  }

  let palpite = Number(campo.value);

  if (palpite < 1 || palpite > 10) {
    document.getElementById("resultado").innerText = "⚠️ Número inválido! Escolha um número entre 1 e 10.";
    campo.value = ""; 
    return; 
  }

  if (historicoPalpites.includes(palpite)) {
    document.getElementById("resultado").innerText = `Números já tentados: ${historicoPalpites.join(", ")}\n\n⚠️ Você já tentou o número ${palpite}! Escolha outro.`;
    campo.value = ""; 
    return;
  }

  historicoPalpites.push(palpite);
  tentativasRestantes--;

  let mensagemResultado = "";

  // Fase 3: Processamento e Fim do Jogo
  if (palpite === numeroSecreto) {
    mensagemResultado = "🔥 Acertou!";
    jogoAtivo = false; 
    botaoEnviar.disabled = true; // 🔒 Desativa o botão no acerto
    campo.disabled = true;        // 🔒 Desativa também o campo de digitar
  } else if (tentativasRestantes === 0) {
    mensagemResultado = `Errou! O número secreto era ${numeroSecreto}. Você perdeu!`;
    jogoAtivo = false; 
    botaoEnviar.disabled = true; // 🔒 Desativa o botão na derrota
    campo.disabled = true;        // 🔒 Desativa também o campo de digitar
  } else if (palpite > numeroSecreto) {
    mensagemResultado = `Errou! O número secreto é menor. Tentativas restantes: ${tentativasRestantes}`;
  } else {
    mensagemResultado = `Errou! O número secreto é maior. Tentativas restantes: ${tentativasRestantes}`;
  }

  campo.value = "";

  document.getElementById("resultado").innerText = `Números já tentados: ${historicoPalpites.join(", ")}\n\n${mensagemResultado}`;
}

function recarregarPagina() {
  location.reload();
}

document.getElementById("palpite").addEventListener("keypress", function(evento) {
  if (evento.key === "Enter") {
    verificar(); 
  }
});
