import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseAPI } from '../interfaces/response-api';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private urlAPI: string = environment.endpoint;

  constructor(private http: HttpClient) {}

  addRoom(data: ResponseAPI): Observable<ResponseAPI> {
    return this.http.post<ResponseAPI>(`${this.urlAPI}/add/room`, data);
  }

  removeRoom(_id: number): Observable<ResponseAPI> {
    return this.http.delete<ResponseAPI>(
      `${this.urlAPI}/remove/room/?_id=${_id}`,
    );
  }
}
