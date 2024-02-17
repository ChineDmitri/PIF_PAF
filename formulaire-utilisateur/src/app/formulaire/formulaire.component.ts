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

  url: string = "http://localhost:XXXX/";
  firstname!: string;
  lastname!: string;

  // messageError?: string;
  // isLoad: boolean = false;

  constructor(private _apiService: ApiService) {}

  onSubmit(): void {
    // this.messageError = undefined;
    // this.isLoad = true;

    console.log(`Prénom: ${this.firstname}, Nom: ${this.lastname}`);

    // this._apiService
    //   .getInfo(this.longitude, this.latitude, this.rayon)
    //   .subscribe({
    //     next: (result: Blob | null): void => {
    //       this.isLoad = false;
    //
    //       if (result !== null) {
    //         this.afficherPdf(result);
    //       } else {
    //         console.log('No content received (204)');
    //         this.messageError = 'Aucune données disponible';
    //       }
    //     },
    //     error: (error: HttpErrorResponse): void => {
    //       this.isLoad = false;
    //
    //       console.log('ERROR !');
    //       this.messageError = error.message;
    //     },
    //   });
  }
}
