import { Component, OnInit } from '@angular/core';
import { PartsService } from '../../parts.service';
import { PartsElectronic } from '../../partselectronic';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-electronic-parts-page',
  templateUrl: './electronic-parts-page.component.html',
  styleUrls: ['./electronic-parts-page.component.scss']
})
export class ElectronicPartsPageComponent implements OnInit {

  constructor(
    private _partsService:PartsService,
    private router: Router
  ) { }
  partselectronics:any;
  ngOnInit() {
    this.getParts();
  }
  getParts(){
    this._partsService
       .getParts()
       .subscribe(partselectronics => {
         this.partselectronics = partselectronics;
     } )
 }
 deletePart(id){
     this._partsService
       .deletePart(id)
       .subscribe(() => {
       this.getParts();
     } )
 }
}
