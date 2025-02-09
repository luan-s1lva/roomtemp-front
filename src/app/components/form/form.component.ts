import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { RoomService } from '../../services/room.service';
import { ResponseAPI } from '../../interfaces/response-api';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,MatIconModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  roomForm:FormGroup;
  action:string = "create"

  constructor(private formBuilder:FormBuilder, private roomService:RoomService) {
    this.roomForm = formBuilder.group({
      _id: ['',[Validators.required, Validators.pattern("^[0-9]+$")]]
    })
  }

  updateActionVariable() {
    if (this.action == "create") {
      this.action = "remove"
    } else {
      this.action = "create"
    }

    console.log(this.action)
  }

  handleBehaviour() {
    console.log(this.action)
    if (this.action == "create") {
      this.addRoom()
    } else {
      this.removeRoom()
    }
  }

  addRoom() {
    const roomData:ResponseAPI = {
      _id: this.roomForm.value._id,
      temperaturaCelsius: "30",
      isACOn: false,
      isLightOn: false
    }

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
    })
  }
}
