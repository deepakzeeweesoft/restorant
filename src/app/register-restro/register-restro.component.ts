import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl} from '@angular/forms'//my self

import {RestourantsService} from '../restourants.service'// my self #13

@Component({
  selector: 'app-register-restro',
  templateUrl: './register-restro.component.html',
  styleUrls: ['./register-restro.component.css']
})
export class RegisterRestroComponent implements OnInit {
 alert:boolean=false      //AFTER    register.component.html
  register=new FormGroup({
    id:new FormControl(''),
    Name:new FormControl(''),
    password:new FormControl('')

  })

  constructor(private resto:RestourantsService) { }

  ngOnInit(): void {
  }
             collection()   //#13 defined by  my self
             {
              console.warn(this.register.value)
                 // after inserted data from restourants.service.ts 
              this.resto.registerUser(this.register.value).subscribe((result)=>{
                console.log(result)
             
//after alert:boolean=false in upper side              
           this.alert=true
                  })
                }
        
                closeAlert()
                {
                  this.alert=false
                }

}
