import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms'//my self

import {RestourantsService} from '../restourants.service'    //#7
@Component({
  selector: 'app-add-restro',
  templateUrl: './add-restro.component.html',
  styleUrls: ['./add-restro.component.css']
})
export class AddRestroComponent implements OnInit {


  addResto=new FormGroup({
    id:new FormControl(''),
    Name:new FormControl(''),
    location:new FormControl('')

  })

  constructor(private resto:RestourantsService) { }  //#7
   alert:boolean=false   //#8

  ngOnInit(): void {
  }
      
  collectResto()
  {
  
         this.resto.saveResto(this.addResto.value).subscribe((result)=>{  //#7
           this.alert=true //#8
         })   
     this.addResto.reset({})       //#8
  }

  //#8
  closeAlert()
  {
    this.alert=false
  }

}
