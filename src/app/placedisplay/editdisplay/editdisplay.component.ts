import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-editdisplay',
  templateUrl: './editdisplay.component.html',
  styleUrls: ['./editdisplay.component.css']
})
export class EditdisplayComponent implements OnInit {
  name: string="";
  dec: string="";
  address: string="";
 city: string="";
  state: string="";
  zip: string="";
  country: string="";
  phone: string="";
  phone2: string="";
  fax: string="";
  website: string="";
  constructor(private _act:ActivatedRoute) {

  }


  ngOnInit() {
    this.name = this._act.snapshot.params["name"];


  }
  //  this._data.getProductById(this.id).subscribe(
    //   (data: Product[]) => {
    //     this.name=data[0].pro_name;
    //     this.price=data[0].pro_price;
    //     this.desc=data[0].pro_desc;
    //     this.mfg=data[0].pro_mfg;
    //     this.qty=data[0].pro_qty;
    //     this.img=data[0].pro_img;
    // });


  onEditPlace(f){
    // this._arr.EditPlace(this.name,f.value).subscribe(
      (arr:any)=>{
        alert('updated');
      }
    // ng);
}
}




