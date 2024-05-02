import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'App1';
  index:any;
  editIndex:any;
  isValid:boolean=false;
   
   arr1:any=[];
   frm1=new FormGroup({
    "name" : new FormControl('',[Validators.required,Validators.minLength(5)]),
    "email": new FormControl ('',[Validators.required,Validators.email]),
    "mobile" : new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    "address" : new FormControl('',[Validators.required])
   })
  

  f1(name:any,email:any,mobile:any,address:any)
  { 
    this.arr1.push({
     "name": name.value,
     "email": email.value,
     "mobile": mobile.value,
     "address":address.value
    });
  }
  onEdit(p:any,index:any)
  {
    
    this.isValid=true;
    this.frm1.patchValue(p);
    console.log(this.arr1[index])
    this.editIndex=index;
    console.log(this.arr1[index]);
    console.log(this.arr1[this.editIndex])
  }
  onUpdate(name:any,email:any,mobile:any,address:any)
  {
    if(this.isValid)
    {
      this.arr1[this.editIndex]={
        name:name.value,
        email:email.value,
        mobile:mobile.value,
        address:address.value
      }
    }
    else{
      this.arr1.push({
        "name": name.value,
        "email": email.value,
        "mobile": mobile.value,
        "address":address.value
       });
    }
    
    }
    

  onDelete(index:any)
  {
    this.arr1.splice(index,1)
  }
}
