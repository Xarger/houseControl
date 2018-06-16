import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PartsService {
  partselectronic = [];
  constructor(private _http: Http) { }
  checkMe: any;
  getParts() {
    return this._http.get("http://localhost/dbElectronicParts/select_dbelectronic.php/")
      .map(res=> {
        this.checkMe = res;
       
        if (this.checkMe._body !== "0") {
           return res.json()
        }
       
      });    
  }
  addPart(info){
    return this._http.post("http://localhost/dbElectronicParts/insert_dbelectronic.php",info)
      .map(()=>"");
  }
  getPart(id){
    return this._http.post("http://localhost/dbElectronicParts/selectone_dbelectronic.php/",{'id':id})
      .map(res=>res.json());
  }
  deletePart(id){
    return this._http.post("http://localhost/dbElectronicParts/delete_dbelectronic.php/",{'id':id})
      .map(()=>this.getParts());
  }
  updatePart(info){
    return this._http.post("http://localhost/dbElectronicParts/update_dbelectronic.php/", info)
      .map(()=>"");
  }

}
