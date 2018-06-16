import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';
import { PartsService } from '../../parts.service';
import { PartsElectronic } from '../../partselectronic';

@Component({
  selector: 'app-editpart',
  templateUrl: './editpart.component.html',
  styleUrls: ['./editpart.component.scss']
})
export class EditpartComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private partsService: PartsService
  ) { }

  ngOnInit() {
    this.getSinglePart();
  }

  model = new PartsElectronic();
  id = this.route.snapshot.params['id'];
  getSinglePart(){
    
    this.partsService
      .getPart(this.id)
      .subscribe(partselectronic =>{
          this.model = partselectronic[0];
          })
  };
  
  updatePart(){
      this.partsService
        .updatePart(this.model)
        .subscribe(()=> this.goBack());
  }
 
   goBack(){
    this.router.navigate(['/electronic-parts']);
  }

}
