import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArtistModel } from 'app/core/models/artist.model';
import { ArtistService } from 'app/modules/artist/_services/artist.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-artist-view',
  templateUrl: './artist-view.component.html',
  styleUrls: ['./artist-view.component.scss']
})
export class ArtistViewComponent implements OnInit {

  id: string;
  artist: ArtistModel;
  defaultImage = 'assets/mindset/loader.gif';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private artistservice: ArtistService,
    private cd: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((paramsid) => {
      this.id = paramsid.id;
    })



    this.artistservice.getById(this.id)
      .pipe(first())
      .subscribe((x: any) => {

        this.cd.markForCheck();
        this.artist = x.result;

      });

  }
}