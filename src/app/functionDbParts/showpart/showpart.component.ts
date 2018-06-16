import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PartsService } from '../../parts.service';
import { PartsElectronic } from '../../partselectronic';

@Component({
  selector: 'app-showpart',
  templateUrl: './showpart.component.html',
  styleUrls: ['./showpart.component.scss']
})
export class ShowpartComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private partsService: PartsService
  ) { }

  ngOnInit() {
    this.getSinglePart();
  }

  partselectronic:PartsElectronic;
    getSinglePart(){
      var id = this.route.snapshot.params['id'];
      this.partsService
        .getPart(id)
        .subscribe(partselectronic =>{
            this.partselectronic = partselectronic[0];
            })
    };

    goBack(){
      this.router.navigate(['/electronic-parts']);
    }

}
