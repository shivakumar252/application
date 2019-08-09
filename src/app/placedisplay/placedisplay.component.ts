import { Component, OnInit } from '@angular/core';
import { Place } from './place';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { PlacedataService } from './placedata.service';

@Component({
  selector: 'app-placedisplay',
  templateUrl: './placedisplay.component.html',
  styleUrls: ['./placedisplay.component.css']
})
export class PlacedisplayComponent implements OnInit {
  closeResult: string;
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

  arr:Place[]=[
    new Place("1","full stack developer","ring road","bangalore","kar","560086","india","080-614586","1234567898","","www.com"),
    new Place("2","mobile application development","club road","mangalore","kar",'560052',"india","080-614236","1234567523","","www.com"),
    new Place("3","offshoredep","39 pipline","hubli","kar","560023","india","080-614584","1234567656","","www.com")
  ];

  constructor(private _router:Router, private _data:PlacedataService,  private modalService: NgbModal) { }

  ngOnInit() {
// alert('processing');
    }
    deleteTask(item:Place){
      var userPreference;
      if (confirm("Do you want to delete?") == true){
        this.arr.splice(this.arr.indexOf(item),1);
         alert('deleted successfully');
    }
    else {
      userPreference = "Save Cancelled!";
  }



}
    onEditTaskClick(item:Place){

      this._router.navigate(['/editdisplay']);
      return this.arr;

    }
    search(value) {
      if (value != "") {
        this.arr = this.arr.filter(x => x.name.indexOf(value) != -1);
      } else {
        // this._data.getAllPlace().subscribe(
        //   (data: Place[]) => {
        //     this.arr = data;
        //   },
        //   function(error) {
        //     alert(error);
        //   },
        //   function() {}
        // );
      }
     }

     // modal
  open(content, f) {

// console.log(f);

    this.modalService.open(content,  {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  // modal
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  onAddPlace() {
    this.arr.push(new Place(this.name,this.dec,this.address,this.city,this.state,this.zip,this.country,this.phone,this.phone2,this.fax,this.website));

  }

  onEditPlace(f){
    this._data.editPlace(this.name,f.value).subscribe(
      (data:any)=>{
        alert('updated');
      }
    );
}



  // onSubmit(f){

  }

