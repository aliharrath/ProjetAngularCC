import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Produit} from '../model/Produit';
import {Commande} from '../model/Commande';

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  c: Commande ;
  httpOptions = { headers: new HttpHeaders({
      'Content-Type': 'application/json'})};
  constructor(private http: HttpClient) { }
  getlisteCommande()
  {
    return this.http.get<Commande[]>('http://localhost:3000/Commande');
  }

  addCommande(){
    this.c = new Commande();
    this.c.nom = '69' ;
    console.log(this.c);
    return this.http.post<Commande>('http://localhost:3000/Commande', this.c);
  }
  deleteCommande(){
    return this.http.delete<Commande>('http://localhost:3000/Commande/DK9tOMK');
  }
}

