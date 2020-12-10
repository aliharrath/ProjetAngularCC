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



}
