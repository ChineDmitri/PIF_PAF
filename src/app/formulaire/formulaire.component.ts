import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';
import { HttpErrorResponse } from '@angular/common/http';
import {first} from "rxjs";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.scss',
})
export class FormulaireComponent {

  firstname!: string;
  lastname!: string;

  message?: string;
  isLoad: boolean = false;

  constructor(private _apiService: ApiService) {}

  onSubmit(): void {
    this.message = undefined;
    this.isLoad = true;

   // console.log(`Prénom: ${this.firstname}, Nom: ${this.lastname}`);

     this._apiService
       .envoyerInfo(this.firstname, this.lastname).subscribe({
         next: (result: any): void => {
           this.isLoad = false;
           this.message = result;
         },
         error: (error: HttpErrorResponse): void => {
           this.isLoad = false;
    
           console.log('ERROR !');
           this.message = error.message;
         },
       });
  }
}
