import { Component, OnInit, AfterViewInit } from '@angular/core';
import { TempService } from '../../services/temp.service';
import { ResponseAPI } from '../../interfaces/response-api';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit{
  temperaturesData:ResponseAPI[] = [];

  constructor(private tempService:TempService) {}

  fetchTempData() {
    this.tempService.returnAllTemps().subscribe({
      next: (data:ResponseAPI[]) => {
        console.log(data)
        this.temperaturesData = data
      }
    })  
  }

  ngOnInit(): void {
    this.fetchTempData()
  }
}
