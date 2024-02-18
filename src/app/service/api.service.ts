import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _apiUrl: string = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  // Une modification
  // Nouvelle modification

  envoyerInfo(lastname: string, firstname: string): any {
    return this._http.post(this._apiUrl,
      { "firstName": firstname, "lastName": lastname }
    ).pipe(
      map((response: any) => {
        if (response.message)
          return response.message;
        else
          return null;
      })
    );
  }
}
