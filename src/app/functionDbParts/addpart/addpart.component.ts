import { Component, OnInit } from '@angular/core';
import { PartsService } from '../../parts.service';
import { PartsElectronic } from '../../partselectronic';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-addpart',
  templateUrl: './addpart.component.html',
  styleUrls: ['./addpart.component.scss']
})
export class AddpartComponent implements OnInit {

  constructor(
    private partsService: PartsService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  model = new PartsElectronic();
  addPart(){
      this.partsService
        .addPart(this.model)
        .subscribe(()=> this.goBack());
  }
   goBack(){
    this.router.navigate(['/electronic-parts']);
  }


}
