# Desafio Javascript

## PTA

PTA é uma fase do processo seletivo do CITI, a qual ensinamos conhecimentos técnicos para aspirantes. Esse boilerplate foi criado para a subárea de desenvolvimento e tem o intuto de aproximar javascript às pessoas.

## Desafio

Ajude Jaypers! Perceba que Jaypers foge da área da tela e isso faz com que ele se perca. Impeça que Jaypers ultrapasse a tela, implementando colisões na borda.

<p align = "center">
   <img src = "./assets/game.png" height = 300px>
</p>

## Main.js

Esse é o arquivo que você deve trabalhar. Comente o que cada linha de código está fazendo e caso não saiba, pesquise no Google. É nesse arquivo, também, que você deve implementar a colisão.

## Objetivos

- Comentários no arquivo main.js
- Colisões.

## Resolução

Tendo as variáveis de tamanho de tela já declaradas, adicionei mais uma condição para as estruturas funcionarem.
Primeiramente, criei algumas variáveis para receber o valor de altura, largura e margem do container. E, posteriormente, subtraí esses valores, o tamanho dos passos (VELOCITY) e comparei com a posição em X e Y. Caso a condição seja satisfeita, o personagem pode continuar caminhando para os lados. Se não, o mesmo chegou a uma determinada borda, não conseguindo ultrapassá-la.
