import { Component } from '@angular/core';

import BoardGame from 'src/app/models/BoardGame';

@Component({
  selector: 'app-rank-list',
  templateUrl: './rank-list.component.html',
  styleUrls: ['./rank-list.component.css']
})
export class RankListComponent {
  boardGameList: BoardGame[] = [
    {
      rank: "1º",
      title: "Gloomhaven",
      description: "Gloomhaven é um jogo de combate tático inspirado em Euros, em um mundo persistente em mudança. Os jogadores assumirão o papel de um aventureiro errante com seu próprio conjunto especial de habilidades e suas próprias razões para viajar para este escuro canto do mundo. Os jogadores têm de trabalhar em conjunto em caso de necessidade para limpar dungeons ameaçadoras e ruínas esquecidas. No processo, eles melhorarão suas habilidades com experiência e pilhagem, descobrindo novos locais para explorar e saquear, e expandindo a história pelas decisões que tomarem.",
    },
    {
      rank: "2º",
      title: "Dominant Species Marine",
      description: "Dominant Species: Marine é um jogo que recria abstratamente uma pequena porção da história antiga: o fim de uma era glacial onerosa e o que isso implica para os seres vivos que tentam se adaptar à terra que muda lentamente.",
    },
    {
      rank: "3º",
      title: "Spirit Island",
      description: "Spirit Island é um jogo cooperativo complexo e temático sobre defender sua casa na ilha de Invasores. Os jogadores são diferentes espíritos da terra, cada um com seus próprios poderes elementais únicos. Cada turno, os jogadores escolhem simultaneamente qual dos seus cartões de energia jogarão, pagando energia para fazê-lo. Usando combinações de cartas de energia que correspondem a afinidades elementares de um espírito pode conceder efeitos de bônus. Poderes mais rápidos possuem efeito imediato, antes que os invasores se espalhem e devastem, mas outras magias são mais lentas, que exige premeditação e planejamento para usar de forma eficaz. Na fase Espírito, espíritos ganham energia, e escolhem como crescem: para recuperar cartas de energia utilizada, procurar novo poder ou para espalhar sua presença em novas áreas da ilha.",
    },
    {
      rank: "4º",
      title: "Arcadia Quest",
      description: "Arcadia Quest é um jogo baseado em campanha para 2 a 4 jogadores, onde cada jogador controla uma guilda de três heróis únicos, enfrentando os outros jogadores e os vários monstros controlados pelo jogo. Os jogadores precisam cumprir uma série de missões para ganhar cada cenário e escolher para onde ir na campanha.",
    }
  ];
}
