# Change Log v. 1.2

Esse projeto tem por finalidade desenvolver uma jogo estilo "point and click" no qual um inimigo aparece na tela e na medida que acertamos os cliques ganhamos pontuação. A versão 1.0 foi desenvovida junto ao professor em aulas na DIO. Já na versão atual, foram acrescentadas novas funcionalidades conforme sugestões. Os testes foram ralizados no navegador Mozilla Firefox através do Live Server do VS Code.

## 💡 Features Added

- Foi adicionado um sistema de Life UP no qual a cada 5 acertos o player ganha uma vida (intervalo de 5 cliques auxiliará o jogador na terceira fase do jogo, que é realmente complicada).
- Foram adicionadas duas novas fases para o jogador desafiar suas habilidades sendo o diferencial a velocidade em que o inimigo aparece na tela.
- Foi adicionado um placar que aparecerá para o jogador quando a tela de game over surgir
- Foram adicionadas novas mídias de áudio para melhor dinamismo da jogatina.

## 🕷️ Bugs Reported

- Durante a terceira fase o timer decresce a cada 2 segundos;
- A partir da segunda fase o contador de erros contabiliza mais de um erro por click errado (suspeitas sobre a funcionalidade "mousedown")
- Não é mobile-first, logo layout fica descofigurado em dispositivos móveis


## 🔧 Issues Fixeds

- Correção do bug que ocorria a partir da segunda fase, no qual cada click certo gerava um click errado simultâneo.
