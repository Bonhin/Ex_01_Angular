
import { Component, Input } from '@angular/core';

import BoardGame  from 'src/app/models/BoardGame';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {

  @Input() boardGame?: BoardGame = {
    rank: "Não definido",
    title: "Titulo não especificado",
    description: "Descrição não especificado"
  };
}
