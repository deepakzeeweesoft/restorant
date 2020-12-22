import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms'//my self copy by add resto.ts 

import {ActivatedRoute} from '@angular/router'//#11 for updating perpose
import { RaceOperator } from 'rxjs/internal/observable/race';

import {RestourantsService} from '../restourants.service'// # 11th 2nd time

@Component({
  selector: 'app-update-restro',
  templateUrl: './update-restro.component.html',
  styleUrls: ['./update-restro.component.css']
})
export class UpdateRestroComponent implements OnInit {

   alert:boolean=false   //#11 alert purpose
  editResto=new FormGroup({
    id:new FormControl(''),
    Name:new FormControl(''),
    location:new FormControl('')

  })

  constructor(private router:ActivatedRoute,private resto:RestourantsService) { } //using this constructor for #11 updating purpose
                               // #11th 2nd time using private resto:RestourantsService
  
                   
    ngOnInit(): void {
    console.warn(this.router.snapshot.params.id);
    this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result)=>{
      console.log(result);
          
      this.editResto=new FormGroup({
        id:new FormControl(result['id']),
        Name:new FormControl(result['Name']),
        location:new FormControl(result['location'])
    
      })     
 


    })
  }

      collection()
          //#11
      {
        console.warn("item",this.editResto.value);  
        this.resto.updateResto(this.router.snapshot.params.id,this.editResto.value).subscribe((result)=>{
             console.warn("result",result);
               this.alert=true //#11 updating alert purpose
        })
        
       
      }
      //#11 updating alert purpose
      closeAlert()
      {
        this.alert=false
      }

}
