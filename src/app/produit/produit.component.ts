import { Component, OnInit } from '@angular/core';
import {ProduitService} from '../shared/produit.service';
import {Produit} from '../model/Produit';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {
  p: Produit[];

  constructor(private PS: ProduitService) { }

  ngOnInit(): void {
    this.PS.getlisteProduit().subscribe(d => this.p = d);
  }
  addNewProduct(form){
    console.log(form.value);

    let nvProduit = {
      id: '',
      nom: form.value.nomproduit,
      prix: form.value.Prixproduit,
      description: form.value.descriptionP,
      categorie: form.value.categorieP,
      photo: form.value.photoP,
      disponibilite: form.value.disponibiliteP,
    };

    console.log(nvProduit);

    this.PS.createProduct(nvProduit).subscribe(data => {
      console.log(data);
    });
    }
  ajouterProduitPanier(idProduit: string): void{
    this.PS.ajouterProduitAuPanier(idProduit);
  }



}
