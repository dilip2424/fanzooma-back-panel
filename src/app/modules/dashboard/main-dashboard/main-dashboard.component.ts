import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../_services/dashboard.service';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  artist: any;
  isLoading$: any;
  allcounts : any;
  constructor(private dashboardService: DashboardService) {
    this.isLoading$ = this.dashboardService.isLoading$;
  }

  ngOnInit(): void {
    this.getCounts();
  }

  getCounts(){
    this.dashboardService.getcounts().subscribe((res : any) => {
      this.allcounts = res.data;
    })
  }

}
