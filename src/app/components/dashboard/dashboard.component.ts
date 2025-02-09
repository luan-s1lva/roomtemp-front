import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TempService } from '../../services/temp.service';
import { ResponseAPI } from '../../interfaces/response-api';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RoomControls } from '../../interfaces/room-controls';
import { RoomControlsService } from '../../services/room-controls.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  temperaturesData: ResponseAPI[] = [];
  roomcontrolsFormArray: FormArray;

  constructor(
    private formBuilder: FormBuilder,
    private tempService: TempService,
    private roomControlsService: RoomControlsService,
  ) {
    this.roomcontrolsFormArray = formBuilder.array([]);
  }

  getRoomForm(index: number): FormGroup {
    return this.roomcontrolsFormArray.at(index) as FormGroup;
  }

  handleRoomControls(index: number) {
    const roomData = this.getRoomForm(index).value;
    this.roomControlsService.updateRoomControls(roomData).subscribe({
      next(value) {
        // console.log(value)
      },
    });
  }

  fetchTempData() {
    this.tempService.returnAllTemps().subscribe({
      next: (data: ResponseAPI[]) => {
        this.temperaturesData = data;

        this.temperaturesData.forEach((room) => {
          this.roomcontrolsFormArray.push(
            this.formBuilder.group({
              _id: [room._id],
              isLightOn: [room.isLightOn],
              isACOn: [room.isACOn],
            }),
          );
        });
      },
    });
  }

  ngOnInit(): void {
    this.fetchTempData();
  }
}
