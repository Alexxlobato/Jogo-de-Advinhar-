// Fase 1: Configuração Inicial do Jogo 
let numeroSecreto = Math.floor(Math.random() * 10) + 1; 
let tentativasRestantes = 3;

function verificar() {
  // Evita a execução se o jogador já perdeu
  if (tentativasRestantes <= 0) {
    document.getElementById("resultado").innerText =
      "O jogo acabou! Recarregue a página.";
    return;
  }
  // Fase 2: Captura e Conversão do Palpite (Conversão para número permite usar ===)
  let palpite = Number(document.getElementById("palpite").value);

  // Deduz uma chance a cada tentativa
  tentativasRestantes--;
  //Ele é exatamente a mesma coisa que escrever: tentativasRestantes = tentativasRestantes - 1;

  // Fase 3: Processamento e Tomada de Decisão
  if (palpite === numeroSecreto) {
    // Caso 1: Acerto
    document.getElementById("resultado").innerText = "Parabéns! Você acertou!";
  } else if (tentativasRestantes === 0) {
    // Caso 2: Esgotou as tentativas (Derrota)
    document.getElementById("resultado").innerText =
      `Errou! O número secreto era ${numeroSecreto}. Você perdeu!`;
  } else if (palpite > numeroSecreto) {
    // Caso 3: Palpite é maior que o número secreto
    document.getElementById("resultado").innerText =
      `Errou! O número secreto é menor. Tentativas restantes: ${tentativasRestantes}`;
  } else {
    // Caso 4: Palpite é menor que o número secreto
    document.getElementById("resultado").innerText =
      `Errou! O número secreto é maior. Tentativas restantes: ${tentativasRestantes}`;
  }
  //Limpar o campo de entrada para a próxima tentativa
    document.getElementById("palpite").value = "";
}

function recarregarPagina() {
    location.reload();
}
