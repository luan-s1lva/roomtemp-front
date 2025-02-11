import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/environment_prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAPI } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root',
})
export class TempService {
  private urlAPI: string = environment.endpoint;

  constructor(private httpClient: HttpClient) {}

  returnAllTemps(): Observable<ResponseAPI[]> {
    return this.httpClient.get<ResponseAPI[]>(`${this.urlAPI}/show`);
  }
}
