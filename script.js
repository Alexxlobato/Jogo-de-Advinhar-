// Fase 1: Configuração Inicial do Jogo
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativasRestantes = 3;
let jogoAtivo = true; // Variável para controlar o estado do jogo
let historicoPalpites = []; // Array para armazenar os palindromos anteriores

// Lógica principal do jogo, chamada quando o jogador clica no botão "Tentar"
function verificar() {
  // Evita a execução se o jogador já perdeu
  if (tentativasRestantes <= 0 || !jogoAtivo) {
    document.getElementById("resultado").innerText = "O jogo acabou! Reinicie o jogo.";
    return;
  }

  // Fase 2: Captura e Conversão do Palpite
  let palpite = Number(document.getElementById("palpite").value);

  if (historicoPalpites.includes(palpite)) {
    document.getElementById("resultado").innerText = `Números já tentados: ${historicoPalpites.join(", ")}\n\n⚠️ Você já tentou o número ${palpite}! Escolha outro.`;
    document.getElementById("palpite").value = "";
     // 🌟O RETURN impede o código abaixo de rodar (não tira vidas)
    return; 
  }

  // Guarda o palpite atual dentro da lista de histórico
  historicoPalpites.push(palpite);

  // Deduz uma chance a cada tentativa
  tentativasRestantes--; 

  // Criamos uma variável vazia para guardar o texto da Fase 3
  let mensagemResultado = "";

  // Fase 3: Processamento e Definição da Mensagem
  if (palpite === numeroSecreto) {
    // Caso 1: Acerto
    mensagemResultado = "🔥 Acertou!";
    jogoAtivo = false; // Desativa o jogo após acerto
  } else if (tentativasRestantes === 0) {
    // Caso 2: Esgotou as tentativas (Derrota)
    mensagemResultado = `Errou! O número secreto era ${numeroSecreto}. Você perdeu!`;
    jogoAtivo = false; // Desativa o jogo após derrota
  } else if (palpite > numeroSecreto) {
    // Caso 3: Palpite é maior que o número secreto
    mensagemResultado = `Errou! O número secreto é menor. Tentativas restantes: ${tentativasRestantes}`;
  } else {
    // Caso 4: Palpite é menor que o número secreto
    mensagemResultado = `Errou! O número secreto é maior. Tentativas restantes: ${tentativasRestantes}`;
  }

  // Limpar o campo de entrada para a próxima tentativa
  document.getElementById("palpite").value = "";

  // 🌟 FASE 4: EXIBIÇÃO FINAL UNIFICADA (Sem sobreposição)
  document.getElementById("resultado").innerText = `Números já tentados: ${historicoPalpites.join(", ")}\n\n${mensagemResultado}`;
}

function recarregarPagina() {
  location.reload();
}

// Monitora o campo de texto para detectar quando uma tecla é pressionada
document.getElementById("palpite").addEventListener("keypress", function(evento) {
  // Verifica se a tecla pressionada foi o "Enter"
  if (evento.key === "Enter") {
    verificar(); // Chama a sua função principal do jogo
  }
});
