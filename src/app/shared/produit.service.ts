import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Produit} from '../model/Produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) { }
  getlisteProduit()
  {
    return this.http.get<Produit[]>('http://localhost:3000/Produit');
  }
}
