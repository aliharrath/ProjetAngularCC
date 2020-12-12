import { Component, OnInit } from '@angular/core';
import {Commande} from '../model/Commande';
import {CommandeService} from '../shared/commande.service';
import {PanierService} from '../shared/panier.service';
import {UserService} from '../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.css']
})
export class CommandeComponent implements OnInit {

 commande = new Commande();
  constructor(private CS: CommandeService, private PNS: PanierService , private US: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.US.currentUser === null )
    {
      this.router.navigate(['']);
    }
  }
  AjoutCommande(){
    this.PNS.getPanier(this.US.currentUser.id).subscribe(x => {
      this.commande.listeProduit = x.listeProduit ;
      this.commande.listeQuantite = x.listeQuantite;
      this.CS.addCommande(this.commande).subscribe(y => { console.log(y); } );
    } );
  }
}
