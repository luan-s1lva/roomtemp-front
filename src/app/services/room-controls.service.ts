import { Injectable } from '@angular/core';
import { environment } from '../../enviroments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RoomControls } from '../interfaces/room-controls';

@Injectable({
  providedIn: 'root',
})
export class RoomControlsService {
  private urlAPI: string = environment.endpoint;

  constructor(private http: HttpClient) {}

  updateRoomControls(data: RoomControls): Observable<RoomControls> {
    const body: RoomControls = {
      _id: data._id,
      isACOn: data.isACOn,
      isLightOn: data.isLightOn,
    };
    return this.http.put<RoomControls>(`${this.urlAPI}/update/room/`, body);
  }
}
