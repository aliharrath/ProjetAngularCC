import { Component, OnInit } from '@angular/core';
import {Commande} from '../model/Commande';
import {CommandeService} from '../shared/commande.service';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {
 Allcommande: Commande[];
  constructor(private CS: CommandeService) { }

  ngOnInit(): void {
    this.CS.deleteCommande().subscribe();
    this.CS.getlisteCommande().subscribe(cd => this.Allcommande = cd);
    console.log(this.Allcommande);
  }
}
