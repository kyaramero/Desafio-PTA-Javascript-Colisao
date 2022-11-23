const character = document.getElementsByClassName("character")[0]; // Variável que armazena a imagem do personagem. Pega do HTML.
const containerCharacter = document.getElementsByClassName(
  "container-character"
)[0]; // Armazena a div no qual o personagem está inserido. Dado que vem do HTML.

const VELOCITY = 10; // Controle dos passos do personagem; Distância.

const SCREEN_WIDTH = screen.width; // Largura da tela em pixels.
const SCREEN_HEIGHT = screen.height; // Altura da tela em pixels.

const characterMargin = character.offsetTop; // Valor da margin-top, colocada no CSS do personagem.
const characterWidth = containerCharacter.clientWidth - characterMargin; // Valor da largura do espaço ocupado pelo personagem.
const characterHeight = containerCharacter.clientHeight - characterMargin; // Valor da altura do espaço ocupado pelo personagem.

let xPosition = 500; // Valor de posição no eixo horizontal; Marcação onde o personagem inicia.
let yPosition = 300; // Valor de posição no eixo vertical; Marcação onde o personagem inicia.

const keysAvaiable = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]; // Guarda as teclas que podem ser utilizadas.
const directions = ["turnUp", "turnLeft", "turnRight", "turnDown"]; // Como o nome mesmo diz, indica as direções. Serve para constrolar as classes, posteriormente.

// Função que será ativada quando alguma tecla for apertada. Recebe como parâmetro a tecla correspondente.
window.addEventListener("keydown", (event) => {
  const key = event.key; // Armazena o valor da tecla apertada, em string.

  // Checa se a tecla apertada faz parte da movimentação. Caso não faça, ela é retornada, "descartada", ou seja, nada ocorre.
  const keyPressedAvaiable = keysAvaiable.some((currentKey) => {
    return currentKey === key;
  });

  if (!keyPressedAvaiable) return;

  // Faz a limpa, checa se o personagem tem algum das direções em suas classes e a retira.
  directions.forEach((direction) => {
    if (character.classList.contains(direction))
      character.classList.remove(direction);
  });

  // As condições serão ativadas dependendo da tecla armazenada na variável "key" e, também, apenas dentro do espaço da tela.
  // Para fazer essa checagem, o tamanho do personagem e os passos que deu não podem ultrapassar o tamanho da tela e, consequentemente, a posição,
  // seja no eixo vertical, seja horizontal.
  if (key === "ArrowUp" && yPosition >= VELOCITY) {
    character.classList.add("turnUp"); // Altera o sentido visual do peronagem.
    yPosition -= VELOCITY; // Diminui a posição vertical, de acordo com o valor da velocidade.
  }

  if (
    key === "ArrowDown" &&
    yPosition <= SCREEN_HEIGHT - characterHeight - VELOCITY
  ) {
    character.classList.add("turnDown");
    yPosition += VELOCITY; // Aumenta a posição vertical, de acordo com o valor da velocidade.
  }

  if (key === "ArrowLeft" && xPosition >= VELOCITY) {
    character.classList.add("turnLeft");
    xPosition -= VELOCITY; // Diminui a posição horizontal, de acordo com o valor da velocidade.
  }

  if (
    key === "ArrowRight" &&
    xPosition < SCREEN_WIDTH - characterWidth - VELOCITY
  ) {
    character.classList.add("turnRight");
    xPosition += VELOCITY; // Aumenta a posição horizontal, de acordo com o valor da velocidade.
  }
  // Altera, lá no CSS, a posição atual do personagem, dependendo de quantos passos deu. Para realizar esse controle de localização.
  containerCharacter.style.top = `${yPosition}px`;
  containerCharacter.style.left = `${xPosition}px`;
});
