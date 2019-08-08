import { Component, OnInit } from '@angular/core';
import { Place } from './place';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

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
  router:any;
  constructor(private _router:Router,private modalService: NgbModal) { }

  ngOnInit() {
// alert('processing');
    }
    deleteTask(item:Place){
      alert('sure are you want to delete' )
      console.log(item);

      this.arr.splice(this.arr.indexOf(item),1);
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


  // onSubmit(f){

  }

