import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private _apiUrl: string = 'http://localhost:3000/';

  constructor(private _http: HttpClient) {}

  // Tentative lint
  // Tentative lint 2
  // Tentative lint 3
  // Tentative lint 4

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
