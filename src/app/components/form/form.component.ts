import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RoomService } from '../../services/room.service';
import { ResponseAPI } from '../../interfaces/response-api';
import { RoomControls } from '../../interfaces/room-controls';
import { RoomControlsService } from '../../services/room-controls.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css',
})
export class FormComponent {
  roomForm: FormGroup;
  roomcontrolsForm: FormGroup;
  action: string = 'create';

  constructor(
    private formBuilder: FormBuilder,
    private roomService: RoomService,
    private roomControlsService: RoomControlsService,
  ) {
    this.roomForm = formBuilder.group({
      _id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    });

    this.roomcontrolsForm = formBuilder.group({
      _id: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      isLightOn: [false, Validators.required],
      isACOn: [false, Validators.required],
    });
  }

  updateActionVariable() {
    if (this.action == 'create') {
      this.action = 'remove';
    } else {
      this.action = 'create';
    }
  }

  handleBehaviour() {
    if (this.action == 'create') {
      this.addRoom();
    } else {
      this.removeRoom();
    }
  }

  // handleRoomControls() {
  //   const roomData:RoomControls = {
  //     _id: this.roomcontrolsForm.value._id,
  //     isLightOn: this.roomcontrolsForm.value.isLightOn,
  //     isACOn: this.roomcontrolsForm.value.isACOn
  //   }

  //   this.roomControlsService.updateRoomControls(roomData).subscribe({
  //     next(value) {
  //       // console.log(value)
  //     },
  //   })
  // }

  addRoom() {
    const roomData: ResponseAPI = {
      _id: this.roomForm.value._id,
      temperaturaCelsius: '30',
      isACOn: false,
      isLightOn: false,
    };

    this.roomService.addRoom(roomData).subscribe({
      next(value) {
        // console.log(value)
      },
    });
  }

  removeRoom() {
    this.roomService.removeRoom(this.roomForm.value._id).subscribe({
      next(value) {
        // console.log(value)
      },
    });
  }
}
