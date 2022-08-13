import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';
import { DashboardService } from '../_services/dashboard.service';

@Component({
  selector: 'app-dashboard-listing',
  templateUrl: './dashboard-listing.component.html',
  styleUrls: ['./dashboard-listing.component.scss', '../../../../assets/sass/libs/select.scss', '../../../../assets/sass/libs/datatables.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardListingComponent implements OnInit {
  isLoadingtable$;
  dashboardListing: any;

  public count: any;
  public offset = 0;
  public currentdocsize = 0;
  public order = '-1';

  public startDate = "";
  public endDate = "";
  public channel = "";
  public page;
  public limit = "";
  public ascDesc = "1";
  public sortByComment = "";
  public sortByView = "";
  public sortByLike = "";
  public sortByDislike = "";
  public sortByTotalEarning = "";
  public sortByDrmRoyaltyShare = "";
  public sortByYourShare = "";
  public sortByVideoName = "";
  public sortByChannelName = "1";

  public ColumnMode = ColumnMode;

  my_messages = {
    'emptyMessage': 'Loading...',
    'totalMessage': 'Items'
  };

  constructor( private dashboardservice: DashboardService) {
    this.isLoadingtable$ = this.dashboardservice.isLoadingtable$;
    
  }

  ngOnInit(): void {
    this.getDashboardList();
  }

  /**
   * Populate the table with new data based on the page number
   * @param page The page to select
   */
   setPage(pageInfo) {
    this.page = pageInfo.offset + 1;
    this.offset = pageInfo.offset;
    //this.limit = pageInfo.limit;
    this.getDashboardList();
  }

  /**
   * Populate the table with new data based on the page number
   * Short event
   */
  onSort(event) {
    const sort = event.sorts[0];
    const prop = sort.prop;
    const dir = sort.dir;
    this.page = 1;
    this.offset = 0;

    this.sortByComment =
    this.sortByView =
    this.sortByLike =
    this.sortByDislike =
    this.sortByTotalEarning =
    this.sortByDrmRoyaltyShare =
    this.sortByYourShare =
    this.sortByVideoName =
    this.sortByChannelName = "";

    switch (prop) {
      case 'comment':
        this.sortByComment = "1"
        break;
      case 'view':
        this.sortByView = "1"
        break;
      case 'like':
        this.sortByLike = "1"
        break;
      case 'dislike':
        this.sortByDislike = "1"
        break;
      case 'total_earning':
        this.sortByTotalEarning = "1"
        break;
      case 'drm_royalty_share':
        this.sortByDrmRoyaltyShare = "1"
        break;
      case 'your_share':
        this.sortByYourShare = "1"
        break;
      case 'vedio_name':
        this.sortByVideoName = "1"
        break;
      case 'channel_name':
        this.sortByChannelName = "1"
        break;
      default:
        this.sortByChannelName = "1"
    }


    if (dir == 'asc') {
      this.ascDesc = "1";
    }
    if (dir == 'desc') {
      this.ascDesc = "-1";
    }


    this.getDashboardList();
  }

  getDashboardList() {
    const params = {
      "startDate": this.startDate,
      "endDate": this.endDate,
      "channel": this.channel,
      "page": this.page ?? 1,
      "limit": this.limit ?? 10,
      "ascDesc": this.ascDesc ?? 1,
      "sortByComment": this.sortByComment,
      "sortByView": this.sortByView,
      "sortByLike": this.sortByLike,
      "sortByDislike": this.sortByDislike,
      "sortByTotalEarning": this.sortByTotalEarning,
      "sortByDrmRoyaltyShare": this.sortByDrmRoyaltyShare,
      "sortByYourShare": this.sortByYourShare,
      "sortByVideoName": this.sortByVideoName,
      "sortByChannelName": this.sortByChannelName,
    };
    this.dashboardservice.getDashboardTableListing(params).subscribe((data: any) => {
      if (data.result) {
        this.dashboardListing = data.result.docs;
        this.count = data.result.totalDocs
        this.offset = data.result.page - 1;
        this.currentdocsize = this.dashboardListing.length;
        if (this.dashboardListing.length == 0) {
          this.my_messages.emptyMessage = "No data found."
        }
      }
    })
  }
}
